import { SchemaFormData } from "./schemas"

export function generateJSONLD(data: SchemaFormData): object {
  // Remove empty strings and undefined values
  const cleanData = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj
        .map(cleanData)
        .filter((item) => item !== null && item !== undefined && item !== "")
    }
    
    if (obj && typeof obj === "object") {
      const cleaned: any = {}
      for (const [key, value] of Object.entries(obj)) {
        if (value === "" || value === null || value === undefined) {
          continue
        }
        
        if (Array.isArray(value)) {
          const cleanedArray = value
            .map(cleanData)
            .filter((item) => item !== null && item !== undefined && item !== "")
          if (cleanedArray.length > 0) {
            cleaned[key] = cleanedArray
          }
        } else if (typeof value === "object") {
          const cleanedObj = cleanData(value)
          if (Object.keys(cleanedObj).length > 0) {
            cleaned[key] = cleanedObj
          }
        } else {
          cleaned[key] = value
        }
      }
      return cleaned
    }
    
    return obj
  }

  return cleanData(data)
}

