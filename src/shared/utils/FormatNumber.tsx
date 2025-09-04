export const formatNumber = (num: number): React.ReactNode => {
  if (num >= 10000) {
    const man = Math.floor(num / 10000);
    return (
      <>
        {man.toLocaleString()}
        <span className="text-[14px] ml-2">만</span>
      </>
    );
  } else if (num >= 1000) {
    return num.toLocaleString();
  } else {
    return num.toString();
  }
};
