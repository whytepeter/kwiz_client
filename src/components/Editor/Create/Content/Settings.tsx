import useQuestion from "@/hooks/useQuestion";
import React, { useMemo } from "react";

type SettingsKey = "required" | "maxCharacters" | "randomize";

export default function Settings() {
  const { selectedQuestion, updateSelectedQuestion } = useQuestion();

  const settingsOption = useMemo(() => {
    let options = [
      {
        key: "required",
        value: selectedQuestion?.required,
        show: true,
      },
      {
        key: "maxCharacters",
        value: selectedQuestion?.maxCharacters,
        show: selectedQuestion?.type === "SHORT_ANSWER",
      },
      {
        key: "randomize",
        value: selectedQuestion?.randomize,
        show: selectedQuestion?.type === "MULTIPLE_CHOICE",
      },
    ].filter((item) => item.show);

    return options;
  }, [selectedQuestion]);

  const updateSettings = (key: SettingsKey) => {
    if (!key || !selectedQuestion) return;
    const newQuestion = {
      ...selectedQuestion,
      [key]: !selectedQuestion[key],
    };

    updateSelectedQuestion(newQuestion);
  };

  return (
    <div className="pt-3 space-y-3">
      <h5>Settings</h5>

      {settingsOption?.map((option) => (
        <div
          key={option.key}
          onClick={() => updateSettings(option.key as SettingsKey)}
          className="text-xs flex items-center justify-between"
        >
          <span className="text-dark-200 capitalize">{option.key}</span>
          <span className="cursor-pointer">
            <img
              src={
                option.value ? "/icons/toggle_active.svg" : "/icons/toggle.svg"
              }
            />
          </span>
        </div>
      ))}
    </div>
  );
}
