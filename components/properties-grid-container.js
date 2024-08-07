import PropertyCard from './property-card'

const PropertiesGridContainer = ({ allproperties }) => {
  return (
    <div className='self-stretch flex flex-row flex-wrap items-start justify-center text-left text-mini-5 text-gray-700 font-body-regular-600'>
      <div className='flex-1 flex flex-row flex-wrap items-start justify-center gap-[12px] px-2.5'>
        {allproperties.map(property => (
          <PropertyCard
            key={property.id}
            imgUrl={property.image}
            name={property.name}
            price={property.price}
          />
        ))}
      </div>
    </div>
  )
}

export default PropertiesGridContainer


