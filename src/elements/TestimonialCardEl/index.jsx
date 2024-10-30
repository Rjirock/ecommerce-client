

export const TestimonialCardEl = ({ name, role, feedback, image }) => (
    <div className="max-w-sm hover:scale-[1.10] bg-white border rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
        <div className="flex items-center gap-4">
            <img
                className="w-16 h-16 rounded-full object-cover border"
                src={image}
                alt={name}
            />
            <div>
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-gray-500">{role}</p>
            </div>
        </div>
        <p className="mt-4 text-gray-700">{feedback}</p>
    </div>
);