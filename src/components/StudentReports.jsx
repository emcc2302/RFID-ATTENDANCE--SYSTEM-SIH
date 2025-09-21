import React, { useState } from 'react';

function StudentReports() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reportText, setReportText] = useState('');

    const handleReportClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setReportText('');
    };

    const handleSubmitReport = (e) => {
        e.preventDefault();
        if (reportText.trim()) {
            alert('Your report has been submitted successfully!');
            handleCloseModal();
        } else {
            alert('Please enter your issue before submitting.');
        }
    };

    return (
        <div className="reports-container">
            <h2>Reports</h2>
            <p>
                If you encounter any issues with the system or have a problem with your attendance, 
                you can report it here. Our support team will review your report shortly.
            </p>

            <button className="report-issue-btn" onClick={handleReportClick}>
                Report an Issue
            </button>

            {isModalOpen && (
                <div className="report-modal-overlay">
                    <div className="report-modal-content">
                        <h3>Report an Issue</h3>
                        <form onSubmit={handleSubmitReport}>
                            <textarea
                                value={reportText}
                                onChange={(e) => setReportText(e.target.value)}
                                placeholder="Describe your issue here..."
                                rows="6"
                                required
                            ></textarea>
                            <div className="modal-buttons">
                                <button type="button" onClick={handleCloseModal} className="cancel-btn">
                                    Cancel
                                </button>
                                <button type="submit" className="submit-btn">
                                    Submit Report
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentReports;