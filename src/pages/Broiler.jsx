import Division from './component/Division';

const Broiler = () => {
    return (
        <>
            <Division
                image="/public/assets/images/Broiler.jpeg"
                title="Broiler"
                paragraphs={["Broilers are young chickens, typically 6 to 8 weeks old, known for their tender meat, soft and pliable skin, and flexible breastbone cartilage. Proper housing is essential, providing each chick with 930 cm² of floor space and ensuring adequate ventilation. Feeding management includes offering 5 cm of linear feeder space per bird up to 2 weeks of age, increasing to 10 cm from 3 weeks onward. It's important to adjust feeder heights as birds grow and avoid overfilling feeders. For watering, supply two 2-liter capacity waterers for every 100 chicks aged 0 to 2 weeks, and two 5-liter waterers from 3 weeks to finishing. Maintaining clean, fresh water at all times is crucial. A recommended broiler ration consists of ingredients like yellow maize, rice polish, soybean meal, groundnut cake, unsalted dried fish, mineral mixture, and salt, with specific percentages varying between starter and finisher feeds. Implementing a vaccination program is vital, starting with RD Lasota or F vaccine via the ocular or nasal route within the first 5 days, followed by IBD live vaccine in drinking water at 10-14 days and again at 24-28 days."]}
            />
            {/* <Division
                image="public/assets/images/1.jpg"
                title="Broiler"
                paragraphs={["Lorem dfsdfsdfsfdsdf dfg dsfgsdfg sdfg sdfg dfgsdf"]}
            /> */}


        </>
    );
}

export default Broiler;
