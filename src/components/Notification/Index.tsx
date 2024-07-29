import React from "react";

export default function Notification() {
  return (
    <div className="cursor-pointer relative">
      <img src="/icons/notification.svg" />
      <i className="pi pi-circle-fill text-[0.6rem] border-2 rounded-full border-white text-secondary absolute top-0 right-0" />
    </div>
  );
}
