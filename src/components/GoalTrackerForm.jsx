import React, { useState } from 'react'

export function GoalTrackerForm(){
  const [steps, setSteps] = useState('')
  const [water, setWater] = useState('')
  const [sleep, setSleep] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    console.log('goals', { steps, water, sleep })
    alert('Saved locally — implement API sync to backend')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <div className="mb-3">
        <label className="form-label">Steps taken</label>
        <input type="number" value={steps} onChange={e=>setSteps(e.target.value)} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Water intake (ml)</label>
        <input type="number" value={water} onChange={e=>setWater(e.target.value)} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Sleep hours</label>
        <input type="number" step="0.1" value={sleep} onChange={e=>setSleep(e.target.value)} className="form-control" />
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
    </form>
  )
}
