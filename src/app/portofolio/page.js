import BlurText from "../components/BlurText";

export default function Portfolio() {
  return (
    <div>
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
      />
    </div>
  );
}
