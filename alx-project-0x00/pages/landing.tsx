import Card from "@/components/Card"
import Button from '../components/Button'
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      {/* Sizes */}
      <div className="flex space-x-3">
        <Button title="Small" className="text-sm px-2 py-1" />
        <Button title="Medium" className="text-base px-4 py-2" />
        <Button title="Large" className="text-lg px-6 py-3" />
      </div>
    </div>
  )
}
export default Landing