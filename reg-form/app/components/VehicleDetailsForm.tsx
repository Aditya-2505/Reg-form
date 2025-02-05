import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VehicleDetailsForm() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="chassisNumber">Chassis Number</Label>
        <Input id="chassisNumber" placeholder="Enter chassis number" />
      </div>
      <div>
        <Label htmlFor="engineNumber">Engine Number</Label>
        <Input id="engineNumber" placeholder="Enter engine number" />
      </div>
      <div>
        <Label htmlFor="makeModel">Make & Model</Label>
        <Input id="makeModel" placeholder="Enter make and model" />
      </div>
      <div>
        <Label htmlFor="manufacturingYear">Manufacturing Year</Label>
        <Input id="manufacturingYear" type="number" min="1900" max="2099" step="1" placeholder="YYYY" />
      </div>
      <div>
        <Label htmlFor="fuelType">Fuel Type</Label>
        <Select>
          <SelectTrigger id="fuelType">
            <SelectValue placeholder="Select fuel type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="cng">CNG</SelectItem>
            <SelectItem value="electric">Electric</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="vehicleCategory">Vehicle Category</Label>
        <Select>
          <SelectTrigger id="vehicleCategory">
            <SelectValue placeholder="Select vehicle category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hcv">HCV</SelectItem>
            <SelectItem value="lcv">LCV</SelectItem>
            <SelectItem value="multiaxle">Multi-axle</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="unladenWeight">Unladen Weight (kg)</Label>
        <Input id="unladenWeight" type="number" placeholder="Enter unladen weight" />
      </div>
      <div>
        <Label htmlFor="gvw">Gross Vehicle Weight (kg)</Label>
        <Input id="gvw" type="number" placeholder="Enter gross vehicle weight" />
      </div>
    </div>
  )
}

