import ServiceSlider from './ServiceSlider'

export default function Services(){
  return(
    <section className="bg-services bg-cover bg-no-repeat bg-center min-h-[862px] py-8">
      <div className="container mx-auto h-[862px]">
        <h2 className="h2 mb-12">Our Services</h2>
        <ServiceSlider />
      </div>
    </section>
  )
}