import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RequiredDocumentsForm() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="form20">Form 20 (Application for Registration)</Label>
        <Input id="form20" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
      <div>
        <Label htmlFor="form21">Form 21 (Sale Certificate from Dealer)</Label>
        <Input id="form21" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
      <div>
        <Label htmlFor="form22">Form 22 (Roadworthiness Certificate)</Label>
        <Input id="form22" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
      <div>
        <Label htmlFor="invoice">Invoice from Dealer</Label>
        <Input id="invoice" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
      <div>
        <Label htmlFor="insurance">Insurance Certificate</Label>
        <Input id="insurance" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
      <div>
        <Label htmlFor="puc">Pollution Under Control (PUC) Certificate</Label>
        <Input id="puc" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
      <div>
        <Label htmlFor="tempReg">Temporary Registration Certificate (if applicable)</Label>
        <Input id="tempReg" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
    </div>
  )
}

