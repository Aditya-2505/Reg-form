import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FeesAndTaxesForm() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="roadTax">Road Tax Amount</Label>
        <Input id="roadTax" type="number" placeholder="Auto-calculated based on state" readOnly />
      </div>
      <div>
        <Label htmlFor="registrationFee">Registration Fee</Label>
        <Input id="registrationFee" type="number" placeholder="Auto-calculated based on GVW" readOnly />
      </div>
      <div>
        <Label htmlFor="fitnessCertificateFee">Fitness Certificate Fee</Label>
        <Input id="fitnessCertificateFee" type="number" placeholder="Enter fitness certificate fee" />
      </div>
    </div>
  )
}

