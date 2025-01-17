import Image from 'next/image';
import React from 'react';

const Activity = () => {
    // Array of activity data
    const activities = [
        { id: 1, name: "Box Cricket", image: "/Images/a1.png" },
        { id: 2, name: "business quiz", image: "/Images/a2.png" },
        { id: 3, name: "fun fiesta", image: "/Images/a3.png" },
        { id: 4, name: "idea pitching", image: "/Images/a4.png" },
        { id: 5, name: "talent truimphs", image: "/Images/a5.png" },
        { id: 6, name: "treasure hunt", image: "/Images/a6.png" },
        { id: 7, name: "reel making", image: "/Images/a7.png" },
        { id: 8, name: "share wars", image: "/Images/a8.png" },
        { id: 9, name: "e-sports", image: "/Images/a9.png" },
    ];

    return (
        <section className='w-11/12 mx-auto flex items-center justify-center flex-col py-10'>
            <h2 className="font-Montserrat text-4xl md:text-7xl font-black text-[#F9C63D] text-center [text-shadow:_10px_5px_2px_rgb(0_0_0)] [-webkit-text-stroke:_1px_black]">
                MORE THAN 9 ENGAGING ACTIVITIES
            </h2>
            <div className='flex-wrap flex gap-5 mt-10 text-center w-full items-center justify-center'>
                {activities.map((activity) => (
                    <div
                        key={activity.id}
                        className='p-2 bg-[#F1473A] w-full md:w-[40%] lg:w-[30%] xl:w-[23%] border-2 border-black rounded-lg [box-shadow:_3px_2px_2px_rgb(0_0_0)] transition-transform duration-300'
                    >
                        <Image src={activity.image} width={500} height={500} alt={activity.name} />
                        <p className='text-white text-xl md:text-2xl font-semibold mt-3 uppercase'>
                            {activity.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Activity;
