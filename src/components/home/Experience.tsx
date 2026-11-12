export default function Experience() {
    const experiences = [
        {
            id: 1,
            title: "Tropical Serenity",
            description:
                "Escape the busy world and enjoy the peaceful atmosphere of a tropical retreat.",
        },
        {
            id: 2,
            title: "Thoughtful Comfort",
            description:
                "Enjoy thoughtfully designed spaces that bring comfort and relaxation to every stay.",
        },
        {
            id: 3,
            title: "Meaningful Moments",
            description:
                "Create unforgettable memories through simple moments surrounded by nature.",
        },
    ];

    return (
        <section
            id="experience"
            className="bg-[#EAE5D9] px-6 py-20 text-center md:px-16"
        >
            <p className="text-xs tracking-[0.3em] text-[#9A8463]">
                THE BARÈS EXPERIENCE
            </p>

            <h2 className="mt-5 font-serif text-3xl text-[#243C32] md:text-5xl">
                More than just a place to stay.
            </h2>

            <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
                {experiences.map((experience) => (
                    <div key={experience.id}>
                        <h3 className="font-serif text-2xl text-[#243C32]">
                            {experience.title}
                        </h3>

                        <p className="mt-4 leading-7 text-[#272923]/70">
                            {experience.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
