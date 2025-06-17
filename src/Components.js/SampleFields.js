// import { useState } from 'react'
// export const SampleFields = () => {

//     const containerStyle = { maxWidth: '400px', margin: '20px auto', padding: '16px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f8f9fa', }
//     const fieldStyle = { marginBottom: '12px', display: 'flex', flexDirection: 'column', }
//     const labelStyle = { marginBottom: '4px', fontWeight: '500', }
//     const inputStyle = { padding: '8px', borderRadius: '4px', border: '1px solid #ccc', }

//     const [name, setName] = useState("");
//     const [classNo, setClassNo] = useState("")

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//  const classNoInt = parseInt(classNo);
//         try {
//             const response = await fetch("http://172.16.118.42:9091/demoproject/students", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     name: name,
//                     classNo: classNoInt
//                 })
//             });

//             if (response.ok) {
//                 const data = await response.text(); // or .json() if returning JSON
//                 alert("Submitted Successfully");
//                 console.log("Server response:", data);
//                 setName("");
//                 setClassNo("");
//             } else {
//                 alert("Submission failed. Server error.");
//             }
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             alert("Error connecting to server.");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div style={containerStyle}>
//                 <div style={fieldStyle}>
//                     <label htmlFor="name" style={labelStyle}>Name:</label>
//                     <input type="text" id="name" name="name" placeholder="Enter name" value={name} onChange={(e) => { setName(e.target.value) }} style={inputStyle} />
//                 </div>
//                 <div style={fieldStyle}>
//                     <label htmlFor="class" style={labelStyle}>Class:</label>
//                     <input type="text" id="class" name="class" placeholder="Enter class" value={classNo} onChange={(e) => { setClassNo(e.target.value) }} style={inputStyle} />
//                 </div>
//                 <div className="text-end" style={{ marginTop: '10px' }}>
//                     <button type="submit" className="btn btn-primary btn-sm">Submit</button>
//                 </div>
//             </div>
//         </form>
//     )
// }

import { useState } from 'react';

export const SampleFields = () => {
    // Styling
    const containerStyle = {
        maxWidth: '400px',
        margin: '20px auto',
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f8f9fa',
    };

    const fieldStyle = {
        marginBottom: '12px',
        display: 'flex',
        flexDirection: 'column',
    };

    const labelStyle = { marginBottom: '4px', fontWeight: '500' };
    const inputStyle = {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const errorStyle = {
        color: 'red',
        fontSize: '0.85rem',
        marginTop: '4px',
    };

    // Form state
    const [name, setName] = useState('');
    const [classNo, setClassNo] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};
        const trimmedName = name.trim();
        const trimmedClass = classNo.trim();
        const classNoInt = parseInt(trimmedClass);

        // Validate
        if (!trimmedName) {
            validationErrors.name = 'Name is required';
        }

        if (!trimmedClass) {
            validationErrors.classNo = 'Class is required';
        } else if (isNaN(classNoInt)) {
            validationErrors.classNo = 'Class must be a valid number';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        // POST data
        try {
            const response = await fetch('http://172.16.118.42:9091/demoproject/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: trimmedName,
                    classNo: classNoInt,
                }),
            });

            const result = await response.text(); // change to .json() if backend returns JSON

            if (response.ok) {
                alert('Submitted Successfully');
                console.log('Server response:', result);
                setName('');
                setClassNo('');
                setErrors({});
            } else {
                alert('Submission failed. Server error.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error connecting to server.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={containerStyle}>
                <div style={fieldStyle}>
                    <label htmlFor="name" style={labelStyle}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                    />
                    {errors.name && <span style={errorStyle}>{errors.name}</span>}
                </div>
                <div style={fieldStyle}>
                    <label htmlFor="class" style={labelStyle}>Class:</label>
                    <input
                        type="text"
                        id="class"
                        name="class"
                        placeholder="Enter class"
                        value={classNo}
                        onChange={(e) => setClassNo(e.target.value)}
                        style={inputStyle}
                    />
                    {errors.classNo && <span style={errorStyle}>{errors.classNo}</span>}
                </div>
                <div className="text-end" style={{ marginTop: '10px' }}>
                    <button type="submit" className="btn btn-primary btn-sm">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
};

