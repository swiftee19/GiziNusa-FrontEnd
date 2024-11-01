enum DangerLevel {
  LOW = "Low",
  MODERATE = "Moderate",
  HIGH = "High",
}

interface RiskLabelProps {
  risk: string;
}

function calculateDangerLevel(risk: string): DangerLevel {
  if (parseInt(risk) < 30) {
    return DangerLevel.LOW;
  } else if (parseInt(risk) < 60) {
    return DangerLevel.MODERATE;
  } else {
    return DangerLevel.HIGH;
  }
}

export default function RiskLabel({risk}: RiskLabelProps) {
  const dangerLevel = calculateDangerLevel(risk);

  return (
    <>
    <div className="w-fit pr-1">
      {dangerLevel === DangerLevel.LOW && (
        <div className="rounded-xl px-6 py-2 bg-lightblue">
          <p className="text-lg text-blue">{risk}%</p>
        </div>
      )}
      {dangerLevel === DangerLevel.MODERATE && (
        <div className="rounded-xl px-6 py-2 bg-lightyellow">
          <p className="text-lg text-yellow">{risk}%</p>
        </div>
      )}
      {dangerLevel === DangerLevel.HIGH && (
        <div className="rounded-xl px-6 py-2 bg-lightred">
          <p className="text-lg text-red">{risk}%</p>
        </div>
      )}
      </div>
    </>
  );
}
