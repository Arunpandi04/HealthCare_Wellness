import { useState } from 'react'

export function GoalTrackerForm(){
  const [steps, setSteps] = useState('')
  const [water, setWater] = useState('')
  const [sleep, setSleep] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    // Local update + placeholder API sync (use axios.post to backend)
    console.log('goals', { steps, water, sleep })
    alert('Saved locally — implement API sync to backend')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
      <div>
        <label className="block text-sm">Steps taken</label>
        <input type="number" value={steps} onChange={e=>setSteps(e.target.value === '' ? '' : Number(e.target.value))} className="mt-1 block w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block text-sm">Water intake (ml)</label>
        <input type="number" value={water} onChange={e=>setWater(e.target.value === '' ? '' : Number(e.target.value))} className="mt-1 block w-full border px-3 py-2 rounded" />
      </div>
      <div>
        <label className="block text-sm">Sleep hours</label>
        <input type="number" step="0.1" value={sleep} onChange={e=>setSleep(e.target.value === '' ? '' : Number(e.target.value))} className="mt-1 block w-full border px-3 py-2 rounded" />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
      </div>
    </form>
  )
}
