import React from 'react';

const TATMatrix: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">TAT Matrix</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>TAT from date of data creation to first call: <strong>7 days</strong></li>
        <li>Cold Mail should be done within: <strong>7 days</strong> of data assigned</li>
        <li>Follow-up mails on cold mails should be done within: <strong>5 days</strong> of cold mail done</li>
        <li>Introductory mail should be done within: <strong>1 day</strong> as contact is marked in interested category</li>
        <li>Follow-up mail on Introductory mail should be done within: <strong>2 days</strong></li>
      </ul>
    </div>
  );
};

export default TATMatrix;