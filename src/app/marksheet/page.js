// pages/marksheet/[rollNumber].js



const MarksheetPage = () => {
    const rollNumber = "12345";

    // Dummy data for demonstration
    const dummyData = {
        firstName: 'John',
        fatherName: 'Doe',
        rollNumber: '12345',
        class: 'XII',
        exams: {
            pa1: [
                { subject: 'Hindi', score: 80 },
                { subject: 'English', score: 85 },
                { subject: 'Science', score: 75 },
                { subject: 'Social Science', score: 90 },
                { subject: 'Maths', score: 92 },
            ],
            pa2: [
                { subject: 'Hindi', score: 78 },
                { subject: 'English', score: 88 },
                { subject: 'Science', score: 82 },
                { subject: 'Social Science', score: 85 },
                { subject: 'Maths', score: 90 },
            ],
            pa3: [
                { subject: 'Hindi', score: 85 },
                { subject: 'English', score: 92 },
                { subject: 'Science', score: 88 },
                { subject: 'Social Science', score: 80 },
                { subject: 'Maths', score: 95 },
            ],
            halfYearly: [
                { subject: 'Hindi', score: 88 },
                { subject: 'English', score: 90 },
                { subject: 'Science', score: 85 },
                { subject: 'Social Science', score: 92 },
                { subject: 'Maths', score: 94 },
            ],
            annual: [
                { subject: 'Hindi', score: 92 },
                { subject: 'English', score: 94 },
                { subject: 'Science', score: 90 },
                { subject: 'Social Science', score: 88 },
                { subject: 'Maths', score: 96 },
            ],
        },
        totalMarks: 0, // You can calculate this based on the dummy data
    };

    if (!rollNumber) {
        return <p>Loading...</p>;
    }

    // Function to calculate total marks for a given exam type
    const calculateTotalMarks = (examType) => {
        return dummyData.exams[examType].reduce((total, subject) => total + (subject.score || 0), 0);
    };

    return (
        <div className="container mx-auto p-4 bg-white shadow-md mt-8 relative  ">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex opacity-20">
                <p className="text-sm font-extrabold text-gray-200 transform ">MSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVM</p>
                <p className="text-sm font-extrabold text-gray-200 transform ">MSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVM</p>
                <p className="text-sm font-extrabold text-gray-200 transform ">MSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVM</p>
                <p className="text-sm font-extrabold text-gray-200 transform ">MSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVM</p>
                <p className="text-sm font-extrabold text-gray-200 transform ">MSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVM</p>
                <p className="text-sm font-extrabold text-gray-200 transform ">MSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVM</p>
                <p className="text-sm font-extrabold text-gray-200 transform text-justify">MSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVMMSVM MSVM MSVM MSVM MSVM MSVM MSVM MVSM MSVM MSVM MSVM MSVM</p>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-center">Madhav Saraswati Viddya Mandir</h1>
            <h4 className="text-xl font-bold mb-4 text-center">Prakash Nagar, Ghazipur</h4>

            <div className="grid grid-cols-2 gap-4 mb-8 mt-14">

                <div>
                    <p className="mb-2">Roll Number: {dummyData.rollNumber}</p>
                    <p className="mb-2">Name: {dummyData.firstName}</p>
                    <p className="mb-2">Fathers Name: {dummyData.fatherName}</p>
                    <p className="mb-2">Class: {dummyData.class}</p>
                </div>
                
            </div>
            <table className="w-full border-collapse border border-gray-500 mb-8">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-500 py-2 px-4">Subject</th>
                        <th className="border border-gray-500 py-2 px-4">PA1</th>
                        <th className="border border-gray-500 py-2 px-4">PA2</th>
                        <th className="border border-gray-500 py-2 px-4">PA3</th>
                        <th className="border border-gray-500 py-2 px-4">Half Yearly</th>
                        <th className="border border-gray-500 py-2 px-4">Annual</th>
                    </tr>
                </thead>
                <tbody>
                    {['Hindi', 'English', 'Science', 'Social Science', 'Maths'].map((subject) => (
                        <tr key={subject}>
                            <td className="border border-gray-500 py-2 px-4">{subject}</td>
                            {['pa1', 'pa2', 'pa3', 'halfYearly', 'annual'].map((examType) => (
                                <td key={examType} className="border border-gray-500 py-2 px-4">
                                    {dummyData.exams[examType].find((item) => item.subject === subject)?.score || 'N/A'}
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr className="bg-gray-200 font-bold">
                        <td className="border border-gray-500 py-2 px-4">Total</td>
                        {['pa1', 'pa2', 'pa3', 'halfYearly', 'annual'].map((examType) => (
                            <td key={examType} className="border border-gray-500 py-2 px-4">
                                {calculateTotalMarks(examType)}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <div className="grid grid-cols-2 gap-4">
                <div>
                <p className=" left-4">Position in Class: ________________</p>
                </div>
                <div>
                    <p className="mb-2">Total Marks: {dummyData.totalMarks}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p>Class Teacher Signature: ________________</p>
                </div>
                <div>
                    <p>Principal Signature: ________________</p>
                </div>
            </div>
            
        </div>
    );
};

export default MarksheetPage;
