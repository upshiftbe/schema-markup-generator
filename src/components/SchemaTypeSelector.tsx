import { Select, SelectProps } from "./ui/select"
import { SCHEMA_TYPES } from "@/types/schema"
import { SchemaType } from "@/types/schema"

interface SchemaTypeSelectorProps extends Omit<SelectProps, "children"> {
  value: SchemaType
  onValueChange: (value: SchemaType) => void
}

export const SchemaTypeSelector = ({
  value,
  onValueChange,
  ...props
}: SchemaTypeSelectorProps) => {
  return (
    <Select
      value={value}
      onChange={(e) => onValueChange(e.target.value as SchemaType)}
      {...props}
    >
      {SCHEMA_TYPES.map((schema) => (
        <option key={schema.type} value={schema.type}>
          {schema.label}
        </option>
      ))}
    </Select>
  )
}

