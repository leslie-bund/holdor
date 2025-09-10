import svgPaths from "./svg-uu4uofrktj";

function Svg() {
  return (
    <div className="relative shrink-0 size-[52.5px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 53">
        <g id="SVG">
          <path d={svgPaths.p3d2c5580} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1a815dc0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pb755800} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p29604c80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p34b23780} fill="var(--fill-0, #374151)" id="Vector_5" />
          <path d={svgPaths.pfb3a900} fill="var(--fill-0, #374151)" id="Vector_6" />
          <path d={svgPaths.p4ced000} fill="var(--fill-0, #374151)" id="Vector_7" />
          <path d={svgPaths.p28138b80} fill="var(--fill-0, #374151)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[1.05px] px-[3.5px] relative shrink-0"
      data-name="Margin"
    >
      <Svg />
    </div>
  );
}

function Container() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex flex-col font-['Effra:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[52.5px] text-left text-nowrap tracking-[-1.312px]">
        <p className="adjustLetterSpacing block leading-[52.5px] whitespace-pre">THO</p>
      </div>
      <Margin />
      <div className="flex flex-col font-['Effra:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[52.5px] text-left text-nowrap tracking-[-1.312px]">
        <p className="adjustLetterSpacing block leading-[52.5px] whitespace-pre">BRIDGE</p>
      </div>
    </div>
  );
}

export default function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Container"
    >
      <Container />
    </div>
  );
}