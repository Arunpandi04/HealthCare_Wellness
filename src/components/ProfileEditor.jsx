import React, { useState } from 'react'

export function ProfileEditor() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [age, setAge] = useState('')
  const [allergies, setAllergies] = useState('')
  const [medications, setMedications] = useState('')

  async function handleSave(e) {
    e.preventDefault();
    const patient = { name, email, phone, age, allergies, medications };
    try {
      // const response = await axios.post("https://api.example.com/patients", patient, {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      console.log("✅ Response:", patient);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("❌ Error saving profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSave} className="bg-white p-4 rounded shadow space-y-3">
      <div className="card-body">
        <div className="row g-3">

          <div className="col-md-6">
            <label className="form-label">Full name</label>
            <input value={name} onChange={e => setName(e.target.value)} className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Age</label>
            <input type="number" value={age} onChange={e => setAge(e.target.value)} className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Allergies</label>
            <input value={allergies} onChange={e => setAllergies(e.target.value)} className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Medications</label>
            <input value={medications} onChange={e => setMedications(e.target.value)} className="form-control" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">Save Profile</button>
          </div>
        </div>
      </div>
    </form>
  )
}
