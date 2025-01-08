import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";

const ActionForm: React.FC = () => {
  const [callStatus, setCallStatus] = useState("");
  const [interestStatus, setInterestStatus] = useState("");
  const [mailStatus, setMailStatus] = useState("");
  const [linkedInStatus, setLinkedInStatus] = useState("");

  // States for remarks and their visibility
  const [remarks, setRemarks] = useState({
    call: "",
    interest: "",
    mail: "",
    linkedIn: "",
  });

  const [isRemarkVisible, setIsRemarkVisible] = useState({
    call: false,
    interest: false,
    mail: false,
    linkedIn: false,
  });

  const [isSaving, setIsSaving] = useState({
    call: false,
    interest: false,
    mail: false,
    linkedIn: false,
  });

  const handleSaveRemark = (type: keyof typeof remarks) => {
    setIsSaving((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setIsSaving((prev) => ({ ...prev, [type]: false }));
      setIsRemarkVisible((prev) => ({ ...prev, [type]: false }));
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 mb-4 sm:gap-6 lg:gap-2 md:gap-3">
        <CustomDropdown
        label="Select Time"
        options={[]}
        onSelect={(value: string) => console.log("Selected time: ", value)}
        dateTimePicker={true}
      />

      <CustomDropdown
        label="Call Status"
        options={["Call Connected", "Busy", "Wrong Number", "Switch Off"]}
        onSelect={(value: string) => setCallStatus(value)}
      />

      <CustomDropdown
        label="Interest Status"
        options={["Interested", "Not Interested", "Call Later", "Follow-up"]}
        onSelect={(value: string) => setInterestStatus(value)}
        remark={{
          visible: isRemarkVisible.interest,
          onToggle: () =>
            setIsRemarkVisible((prev) => ({ ...prev, interest: !prev.interest })),
          value: remarks.interest,
          onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setRemarks((prev) => ({ ...prev, interest: e.target.value })),
          onSave: () => handleSaveRemark("interest"),
          isSaving: isSaving.interest,
        }}
        dateTimePicker={true}
      />

      <CustomDropdown
        label="Mail Status"
        options={[
          "Cold Mail Done",
          "Introductory Mail Done",
          "Follow Up on Cold Mail Done",
          "Follow Up on Introductory Mail Done",
        ]}
        onSelect={(value: string) => setMailStatus(value)}
        remark={{
          visible: isRemarkVisible.mail,
          onToggle: () =>
            setIsRemarkVisible((prev) => ({ ...prev, mail: !prev.mail })),
          value: remarks.mail,
          onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setRemarks((prev) => ({ ...prev, mail: e.target.value })),
          onSave: () => handleSaveRemark("mail"),
          isSaving: isSaving.mail,
        }}
      />

      <CustomDropdown
        label="LinkedIn Status"
        options={[
          "Cold Message Done",
          "Introductory Message Done",
          "Follow Up on Cold Message Done",
          "Follow Up on Introductory Message Done",
          "Conversation on LinkedIn",
        ]}
        onSelect={(value: string) => setLinkedInStatus(value)}
        remark={{
          visible: isRemarkVisible.linkedIn,
          onToggle: () =>
            setIsRemarkVisible((prev) => ({ ...prev, linkedIn: !prev.linkedIn })),
          value: remarks.linkedIn,
          onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setRemarks((prev) => ({ ...prev, linkedIn: e.target.value })),
          onSave: () => handleSaveRemark("linkedIn"),
          isSaving: isSaving.linkedIn,
        }}
      />

    
    </div>
  );
};

export default ActionForm;
