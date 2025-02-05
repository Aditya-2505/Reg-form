import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PermitsAndComplianceForm() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="nationalPermit">National Permit Upload (if applicable)</Label>
        <Input id="nationalPermit" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
      <div>
        <Label htmlFor="statePermit">State Permit Upload (if applicable)</Label>
        <Input id="statePermit" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
      <div>
        <Label htmlFor="fastagNumber">FASTag Registration Number</Label>
        <Input id="fastagNumber" placeholder="Enter FASTag registration number" />
      </div>
      <div>
        <Label htmlFor="fitnessCertificate">Fitness Certificate Upload</Label>
        <Input id="fitnessCertificate" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
    </div>
  )
}

