"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import VehicleDetailsForm from "./components/VehicleDetailsForm"
import OwnerDetailsForm from "./components/OwnerDetailsForm"
import RequiredDocumentsForm from "./components/RequiredDocumentsForm"
import FeesAndTaxesForm from "./components/FeesAndTaxesForm"
import PermitsAndComplianceForm from "./components/PermitsAndComplianceForm"

const sections = [
  { value: "vehicle", label: "Vehicle Details" },
  { value: "owner", label: "Owner Details" },
  { value: "documents", label: "Required Documents" },
  { value: "fees", label: "Fees & Taxes" },
  { value: "permits", label: "Permits & Compliance" },
]

export default function VehicleRegistrationForm() {
  const [selectedSection, setSelectedSection] = useState(sections[0].value)

  const renderForm = () => {
    switch (selectedSection) {
      case "vehicle":
        return <VehicleDetailsForm />
      case "owner":
        return <OwnerDetailsForm />
      case "documents":
        return <RequiredDocumentsForm />
      case "fees":
        return <FeesAndTaxesForm />
      case "permits":
        return <PermitsAndComplianceForm />
      default:
        return null
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Vehicle Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <Select onValueChange={setSelectedSection} defaultValue={selectedSection}>
          <SelectTrigger className="w-full mb-4">
            <SelectValue placeholder="Select a section" />
          </SelectTrigger>
          <SelectContent>
            {sections.map((section) => (
              <SelectItem key={section.value} value={section.value}>
                {section.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {renderForm()}
        <Button type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </div>
  )
}

