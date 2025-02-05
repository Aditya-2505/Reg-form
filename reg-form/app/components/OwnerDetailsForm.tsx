import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function OwnerDetailsForm() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="ownerName">Owner's Name</Label>
        <Input id="ownerName" placeholder="Enter owner's name" />
      </div>
      <div>
        <Label htmlFor="addressProof">Address Proof Upload</Label>
        <Input id="addressProof" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
      <div>
        <Label htmlFor="mobileNumber">Mobile Number</Label>
        <Input id="mobileNumber" type="tel" placeholder="Enter mobile number" />
      </div>
      <div>
        <Label htmlFor="emailId">Email ID</Label>
        <Input id="emailId" type="email" placeholder="Enter email address" />
      </div>
      <div>
        <Label htmlFor="panCard">PAN Card Upload (if applicable)</Label>
        <Input id="panCard" type="file" accept=".pdf,.jpg,.jpeg,.png" />
      </div>
    </div>
  )
}

