import svgPaths from "./svg-3pzuccfyyf";
import imgImage from "figma:asset/c49dc4b2248d886d7860e14cefbc0ca38ee34e0c.png";
import imgModernEnergy from "figma:asset/7777dd1027ee050ff394f7082a9a5dfe86bdd932.png";
import imgAboutUs from "figma:asset/e07e5d203b2a80b511305c6f9bdfb1b22cf1721a.png";
import imgBackground from "figma:asset/79a05aa16e89a84f78fb5f285adc47cbcd492224.png";
import imgImage1 from "figma:asset/bee381277d00a44e7696df3801bd21858e2b758c.png";
import imgModernEnergyOfficeJpg from "figma:asset/b03fe8b9ca4a09d3ec06f0f4a5ac56d4564da72a.png";

function Image() {
  return (
    <div
      className="absolute bg-left bg-no-repeat bg-size-[100%_119.97%] inset-0"
      data-name="Image"
      style={{ backgroundImage: `url('${imgImage}')` }}
    />
  );
}

function Container() {
  return (
    <div
      className="absolute bottom-0 box-border content-stretch flex flex-col h-0.5 items-start justify-center left-0 overflow-clip p-0 right-0"
      data-name="Container"
    >
      <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px shrink-0 w-full" data-name="Horizontal Divider" />
    </div>
  );
}

function Tab() {
  return <div className="bg-[#3f5588] rounded-[6.25px] shrink-0 size-[12.5px]" data-name="Tab" />;
}

function Item() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center px-[2.5px] py-0 relative shrink-0"
      data-name="Item"
    >
      <Tab />
    </div>
  );
}

function Tab1() {
  return <div className="bg-[#9faac3] rounded-[6.25px] shrink-0 size-[12.5px]" data-name="Tab" />;
}

function Item1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center px-[2.5px] py-0 relative shrink-0"
      data-name="Item"
    >
      <Tab1 />
    </div>
  );
}

function List() {
  return (
    <div
      className="absolute bottom-[17px] box-border content-stretch flex flex-row items-center justify-center left-[50px] p-0 right-[50px]"
      data-name="List"
    >
      <Item />
      <Item1 />
    </div>
  );
}

function Heading1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Black',_sans-serif] font-black justify-center leading-[51.33px] relative shrink-0 text-[#ffffff] text-[46.7px] text-left uppercase w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">Affordable, Reliable, Sustainable Energy</p>
        <p className="block">for All</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-[15px] pt-0 px-[15px] relative shrink-0 w-[1170px]"
      data-name="Container"
    >
      <Heading1 />
    </div>
  );
}

function Container2() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-start left-0 opacity-[0.763] p-0 right-0 top-[366.17px]"
      data-name="Container"
    >
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[800px] left-0 right-0 top-0" data-name="Container">
      <List />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Container">
      <Image />
      <Container />
      <Container3 />
      <div className="absolute bg-gradient-to-b from-[#3f558880] inset-0 to-70% to-[#3f558800]" data-name="Gradient" />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#ffffff] left-[619.39px] rounded-[2.5px] size-px top-3" data-name="Input">
      <div
        aria-hidden="true"
        className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]"
      />
    </div>
  );
}

function ModernEnergy() {
  return (
    <div
      className="bg-[0%_49.98%] bg-no-repeat bg-size-[100%_100%] h-[50.44px] max-w-[150px] shrink-0 w-[150px]"
      data-name="Modern Energy"
      style={{ backgroundImage: `url('${imgModernEnergy}')` }}
    />
  );
}

function Component3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Component 3"
    >
      <ModernEnergy />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] max-w-[1170px] p-0 top-0 w-[150px]"
      data-name="Container"
    >
      <Component3 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div
      className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col items-center justify-start pb-[5px] pt-0 px-0 relative shrink-0"
      data-name="Overlay+Shadow"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[22.67px] whitespace-pre">Home</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-2px_0px_0px_inset_#ffffff]" />
    </div>
  );
}

function Component1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[5px] px-[15px] relative shrink-0"
      data-name="Component 1"
    >
      <OverlayShadow />
    </div>
  );
}

function Item2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Item"
    >
      <Component1 />
    </div>
  );
}

function Container6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[5px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[22.67px] whitespace-pre">Platforms</p>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[5px] px-[15px] relative shrink-0"
      data-name="Component 1"
    >
      <Container6 />
    </div>
  );
}

function Item3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Item"
    >
      <Component6 />
    </div>
  );
}

function Container7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[5px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[22.67px] whitespace-pre">Founders</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[5px] px-[15px] relative shrink-0"
      data-name="Component 1"
    >
      <Container7 />
    </div>
  );
}

function Item4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Item"
    >
      <Component7 />
    </div>
  );
}

function Container8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[5px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[22.67px] whitespace-pre">Our Offering</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[5px] px-[15px] relative shrink-0"
      data-name="Component 1"
    >
      <Container8 />
    </div>
  );
}

function Item5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Item"
    >
      <Component8 />
    </div>
  );
}

function Container9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[5px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[22.67px] whitespace-pre">Insights</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[5px] px-[15px] relative shrink-0"
      data-name="Component 1"
    >
      <Container9 />
    </div>
  );
}

function Item6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Item"
    >
      <Component9 />
    </div>
  );
}

function Container10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[5px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[22.67px] whitespace-pre">Careers</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[5px] px-[15px] relative shrink-0"
      data-name="Component 1"
    >
      <Container10 />
    </div>
  );
}

function Item7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Item"
    >
      <Component10 />
    </div>
  );
}

function Container11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start pb-[5px] pt-0 px-0 relative shrink-0"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[22.67px] whitespace-pre">Contact us</p>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div
      className="bg-[#3f5588] box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[5px] px-[15px] relative shrink-0"
      data-name="Component 1"
    >
      <Container11 />
    </div>
  );
}

function Item8() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Item"
    >
      <Component11 />
    </div>
  );
}

function List1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-end left-[485.39px] p-0 right-[15px] top-[13px]"
      data-name="List"
    >
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[50.44px] relative shrink-0 w-[1170px]" data-name="Container">
      <Container5 />
      <List1 />
    </div>
  );
}

function Container13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Input />
      <Container12 />
    </div>
  );
}

function Background() {
  return (
    <div
      className="bg-[#3f5588] box-border content-stretch flex flex-col h-[800px] items-start justify-start px-0 py-[30px] relative shrink-0 w-full"
      data-name="Background"
    >
      <Container4 />
      <Container13 />
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[116.013px] overflow-clip relative shrink-0 w-[68px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 117">
        <g id="Group">
          <path d={svgPaths.p182be500} fill="var(--fill-0, #3F5588)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CertifiedSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[116px] items-center justify-center overflow-clip p-0 relative shrink-0 w-[68px]"
      data-name="certified.svg fill"
    >
      <Component2 />
    </div>
  );
}

function CertifiedCorporation() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[165px] overflow-clip p-0 relative shrink-0 w-[68px]"
      data-name="Certified Corporation"
    >
      <CertifiedSvgFill />
    </div>
  );
}

function Container14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <CertifiedCorporation />
    </div>
  );
}

function Container15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start min-h-px px-[15px] py-0 relative shrink-0 w-[195px]"
      data-name="Container"
    >
      <Container14 />
    </div>
  );
}

function Heading3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#3f5588] text-[46.7px] text-left uppercase w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[51.33px]">91.5</p>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="h-0.5 relative shrink-0 w-full" data-name="Separator">
      <div
        aria-hidden="true"
        className="absolute border-[#3f5588] border-[2px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Container16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#515960] text-[16px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[22.67px]">B Impact Assessment Score</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start min-h-inherit pb-[14.99px] pt-0 px-[15px] relative w-full">
          <Heading3 />
          <Separator />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#3f5588] text-[46.7px] text-left uppercase w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[51.33px]">100+</p>
      </div>
    </div>
  );
}

function Separator1() {
  return (
    <div className="h-0.5 relative shrink-0 w-full" data-name="Separator">
      <div
        aria-hidden="true"
        className="absolute border-[#3f5588] border-[2px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Container18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#515960] text-[16px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[22.67px]">Full-time employees globally</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start min-h-inherit pb-[14.99px] pt-0 px-[15px] relative w-full">
          <Heading4 />
          <Separator1 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 1"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#3f5588] text-[46.7px] text-left uppercase w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[51.33px]">2016</p>
      </div>
    </div>
  );
}

function Separator2() {
  return (
    <div className="h-0.5 relative shrink-0 w-full" data-name="Separator">
      <div
        aria-hidden="true"
        className="absolute border-[#3f5588] border-[2px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Container20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#515960] text-[16px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[22.67px]">Founding Year</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="min-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start min-h-inherit pb-[14.99px] pt-0 px-[15px] relative w-full">
          <Heading5 />
          <Separator2 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-0"
      data-name="Heading 1"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#3f5588] text-[46.7px] text-left text-nowrap uppercase"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[51.33px] whitespace-pre">{`>1GW`}</p>
      </div>
    </div>
  );
}

function Separator3() {
  return (
    <div className="absolute h-0.5 left-[15px] right-[15px] top-[66.33px]" data-name="Separator">
      <div
        aria-hidden="true"
        className="absolute border-[#3f5588] border-[2px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Container22() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] p-0 right-[15px] top-[82.66px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[22.67px] relative shrink-0 text-[#515960] text-[16px] text-left text-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">Clean Energy Assets Under</p>
        <p className="block">Management</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="basis-0 grow h-[143.64px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <Heading6 />
      <Separator3 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container17 />
      <Container19 />
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start min-h-px p-0 relative shrink-0 w-[975px]"
      data-name="Container"
    >
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container15 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[1170px]"
      data-name="Container"
    >
      <Container26 />
    </div>
  );
}

function Section() {
  return (
    <div
      className="bg-[#f0f2f6] box-border content-stretch flex flex-col items-center justify-start px-0 py-20 relative shrink-0 w-full"
      data-name="Section"
    >
      <Container27 />
    </div>
  );
}

function Heading2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#3f5588] text-[33.3px] text-left uppercase w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[36.67px]">About us</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[22.67px] relative shrink-0 text-[#515960] text-[16px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">Modern Energy® is a diversified clean energy company</p>
        <p className="block mb-0">that launches, scales and operates energy transition</p>
        <p className="block mb-0">platforms to help the world reach a carbon-free</p>
        <p className="block">economy.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[24.48px] items-start justify-start max-w-[1170px] p-0 relative shrink-0 w-[400px]"
      data-name="Container"
    >
      <Heading2 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 z-[2]" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[177.58px] pl-0 pr-[30px] pt-[162.58px] relative w-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div
      className="bg-[0%_49.06%] bg-no-repeat bg-size-[100%_100%] h-[492.44px] max-w-[1170px] shrink-0 w-[570px]"
      data-name="About us"
      style={{ backgroundImage: `url('${imgAboutUs}')` }}
    />
  );
}

function Component12() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 z-[1]"
      data-name="Component 3"
    >
      <AboutUs />
    </div>
  );
}

function Container31() {
  return (
    <div
      className="box-border content-stretch flex flex-row isolate items-start justify-center max-w-[1170px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container30 />
      <Component12 />
    </div>
  );
}

function Container32() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start px-[15px] py-0 relative shrink-0 w-[1170px]"
      data-name="Container"
    >
      <Container31 />
    </div>
  );
}

function Section1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-start px-0 py-20 relative shrink-0 w-full"
      data-name="Section"
    >
      <Container32 />
    </div>
  );
}

function Heading7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[33.3px] text-left uppercase w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[36.67px]">OUR OFFERING</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[22.67px] relative shrink-0 text-[#ffffff] text-[16px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">We partner with early-stage entrepreneurs and</p>
        <p className="block mb-0">developers. Our Capital + Culture + Capabilities</p>
        <p className="block mb-0">approach is tailor-made to accelerate new platforms</p>
        <p className="block">quickly and efficiently.</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[11.992px] relative w-[16.01px]" data-name="Component 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="Component 4">
          <path d={svgPaths.p3c31cd00} fill="var(--fill-0, #3F5588)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component4 />
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[60px] items-center justify-center pl-[41px] pr-4 py-[11px] relative shrink-0"
      data-name="Link"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f5588] text-[12px] text-center text-nowrap tracking-[4px] uppercase"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[17.14px] whitespace-pre">{`  More  `}</p>
      </div>
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[10.49px] px-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Link />
    </div>
  );
}

function Container36() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[24.5px] items-start justify-start max-w-[570px] p-0 relative shrink-0 w-[400px]"
      data-name="Container"
    >
      <Heading7 />
      <Container33 />
      <Container35 />
    </div>
  );
}

function Background1() {
  return (
    <div
      className="basis-0 bg-[#3f5588] bg-repeat bg-size-[40px_40px,auto] bg-top-left grow min-h-px min-w-px relative shrink-0"
      data-name="Background"
      style={{ backgroundImage: `url('${imgBackground}')` }}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[186.55px] pl-[170px] pr-[150px] pt-[186.53px] relative w-full">
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center max-w-[1440px] p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="basis-0 bg-no-repeat bg-size-[140.56%_100%] bg-top grow h-[600px] min-h-px min-w-px shrink-0"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
      <Background1 />
    </div>
  );
}

function Section2() {
  return (
    <div
      className="bg-[#3f5588] box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Section"
    >
      <Container37 />
    </div>
  );
}

function Heading8() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0"
      data-name="Heading 2"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Black',_sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#3f5588] text-[33.3px] text-left text-nowrap uppercase"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[36.67px] whitespace-pre">OUR TEAM</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[60.95px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[22.67px] relative shrink-0 text-[#515960] text-[16px] text-left text-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">As a certified B-Corp, our mission is affordable, reliable,</p>
        <p className="block mb-0">sustainable energy for all. We’re focused on building a</p>
        <p className="block mb-0">hundred-year company where exceptional people can</p>
        <p className="block mb-0">collectively make an outside impact on climate change.</p>
        <p className="block mb-0">When you join Modern, you’ll work with people who</p>
        <p className="block mb-0">are mission-aligned and excited about bending the arc</p>
        <p className="block mb-0">of the energy transition. We attract self-directed,</p>
        <p className="block">intellectually-curious, and kind leaders.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-[257.38px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[22.67px] relative shrink-0 text-[#515960] text-[16px] text-left text-nowrap whitespace-pre"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">We are an equal opportunity employer and believe our</p>
        <p className="block mb-0">long-term strategy can only be accomplished by having</p>
        <p className="block mb-0">a diversity of thought, experience, and backgrounds at</p>
        <p className="block">the table.</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="h-[11.992px] relative w-[16.01px]" data-name="Component 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="Component 4">
          <path d={svgPaths.p3c31cd00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component13 />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div
      className="bg-[#3f5588] box-border content-stretch flex flex-row gap-[60px] items-center justify-center pl-[41px] pr-4 py-[11px] relative shrink-0"
      data-name="Link"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[4px] uppercase"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[17.14px] whitespace-pre">{`  More  `}</p>
      </div>
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-0 pt-5 px-0 right-0 top-[363.53px]"
      data-name="Container"
    >
      <Link1 />
    </div>
  );
}

function Component14() {
  return (
    <div className="h-3 relative w-[16.02px]" data-name="Component 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
        <g id="Component 4">
          <path d={svgPaths.p3b745af0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component14 />
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div
      className="bg-[#3f5588] box-border content-stretch flex flex-row gap-[60px] items-center justify-center pl-[41px] pr-4 py-[11px] relative shrink-0"
      data-name="Link"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[4px] uppercase"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[17.14px] whitespace-pre">{`  Join us  `}</p>
      </div>
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-0 pb-0 pt-5 px-0 right-0 top-[423.17px]"
      data-name="Container"
    >
      <Link2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[482.81px] max-w-[570px] relative shrink-0 w-[400px]" data-name="Container">
      <Heading8 />
      <Container38 />
      <Container39 />
      <Container41 />
      <Container43 />
    </div>
  );
}

function Background2() {
  return (
    <div className="basis-0 bg-[#f0f2f6] grow min-h-px min-w-px mr-[-60px] relative shrink-0" data-name="Background">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[196.64px] pl-[150px] pr-[170px] pt-[120px] relative w-full">
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function ModernEnergyOfficeJpg() {
  return (
    <div
      className="bg-[0%_50.06%] bg-no-repeat bg-size-[100%_100%] h-[495.8px] max-w-[630px] shrink-0 w-[630px]"
      data-name="Modern Energy Office.jpg"
      style={{ backgroundImage: `url('${imgModernEnergyOfficeJpg}')` }}
    />
  );
}

function Component15() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Component 3"
    >
      <ModernEnergyOfficeJpg />
    </div>
  );
}

function Tabpanel() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start min-h-px p-0 relative shrink-0 w-[630px]"
      data-name="Tabpanel"
    >
      <Component15 />
    </div>
  );
}

function Container45() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[1260px]"
      data-name="Container"
    >
      <Tabpanel />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pl-[630px] pr-0 py-0 relative w-full">
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="h-4 relative w-[16.02px]" data-name="Component 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g id="Component 4">
          <path d={svgPaths.p1a02cf00} fill="var(--fill-0, #3F5588)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component16 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-[15.66px] pl-5 pr-2.5 pt-[17px] relative w-full">
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="h-4 relative w-[16.02px]" data-name="Component 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g id="Component 4">
          <path d={svgPaths.p2434f100} fill="var(--fill-0, #3F5588)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component17 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-col items-end relative size-full">
        <div className="box-border content-stretch flex flex-col items-end justify-start pb-[15.66px] pl-2.5 pr-5 pt-[17px] relative w-full">
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Tab1Of2() {
  return <div className="bg-[#3f5588] rounded-[6.25px] shrink-0 size-[12.5px]" data-name="Tab - 1 of 2" />;
}

function Container51() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center px-[2.5px] py-0 relative shrink-0"
      data-name="Container"
    >
      <Tab1Of2 />
    </div>
  );
}

function Tab2Of2() {
  return <div className="bg-[#9faac3] rounded-[6.25px] shrink-0 size-[12.5px]" data-name="Tab - 2 of 2" />;
}

function Container52() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-center px-[2.5px] py-0 relative shrink-0"
      data-name="Container"
    >
      <Tab2Of2 />
    </div>
  );
}

function Tablist() {
  return (
    <div
      className="absolute bottom-[17.01px] box-border content-stretch flex flex-row items-center justify-center left-[50px] p-0 right-[50px]"
      data-name="Tablist"
    >
      <Container51 />
      <Container52 />
    </div>
  );
}

function Background3() {
  return (
    <div
      className="bg-[#f0f2f6] box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative shrink-0 w-[555px]"
      data-name="Background"
    >
      <Container48 />
      <Container50 />
      <Tablist />
    </div>
  );
}

function Container53() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[15px] items-end justify-start max-w-[630px] p-0 relative shrink-0 w-[630px]"
      data-name="Container"
    >
      <Container46 />
      <Background3 />
    </div>
  );
}

function Container54() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px mr-[-60px] p-0 relative shrink-0"
      data-name="Container"
    >
      <Container53 />
    </div>
  );
}

function Section3() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-row items-center justify-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center max-w-inherit pl-0 pr-[120px] py-0 relative w-full">
          <Background2 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Container56() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-start left-0 p-0 right-0 top-[30px]"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14.7px] text-center text-nowrap tracking-[4px] uppercase"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="adjustLetterSpacing block leading-[21.33px] whitespace-pre">Back to top</p>
      </div>
    </div>
  );
}

function ModernEnergy1() {
  return (
    <div
      className="bg-[0%_49.98%] bg-no-repeat bg-size-[100%_100%] h-[50.44px] max-w-[150px] shrink-0 w-[150px]"
      data-name="Modern Energy"
      style={{ backgroundImage: `url('${imgModernEnergy}')` }}
    />
  );
}

function Component18() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Component 3"
    >
      <ModernEnergy1 />
    </div>
  );
}

function Container57() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[292.5px] p-0 relative shrink-0 w-[150px]"
      data-name="Container"
    >
      <Component18 />
    </div>
  );
}

function Container58() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[21.33px] relative shrink-0 text-[#ffffff] text-[12.5px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">© 2025 Modern Energy®.</p>
        <p className="block">All Rights Reserved.</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[21.33px] items-start justify-start left-0 min-h-px pb-[14.99px] pt-0 px-[15px] right-1/2 top-0"
      data-name="Container"
    >
      <Container57 />
      <Container58 />
    </div>
  );
}

function Component5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-1px] pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="Component 5"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14.7px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[21.33px]">Home</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-1px] pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="Component 5"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14.7px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[21.33px]">Platforms</p>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-1px] pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="Component 5"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14.7px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[21.33px]">Founders</p>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-1px] pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="Component 5"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14.7px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[21.33px]">Our Offering</p>
      </div>
    </div>
  );
}

function Component22() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-1px] pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="Component 5"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14.7px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[21.33px]">Insights</p>
      </div>
    </div>
  );
}

function Component23() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-1px] pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="Component 5"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14.7px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[21.33px]">Careers</p>
      </div>
    </div>
  );
}

function Component24() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-1px] pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="Component 5"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14.7px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[21.33px]">Contact us</p>
      </div>
    </div>
  );
}

function Component25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-1px] pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="Component 5"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14.7px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[21.33px]">Disclaimer</p>
      </div>
    </div>
  );
}

function Component26() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start mb-[-1px] pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="Component 5"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14.7px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block leading-[21.33px]">Website Privacy Policy</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 relative shrink-0 w-full"
      data-name="List"
    >
      <Component5 />
      <Component19 />
      <Component20 />
      <Component21 />
      <Component22 />
      <Component23 />
      <Component24 />
      <Component25 />
      <Component26 />
    </div>
  );
}

function Container60() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-1/2 min-h-px px-[15px] py-0 right-0 top-[-1px]"
      data-name="Container"
    >
      <List2 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[200.95px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container61 />
    </div>
  );
}

function Component27() {
  return (
    <div className="h-[85.304px] overflow-clip relative shrink-0 w-[50px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 86">
        <g id="Group">
          <path d={svgPaths.pd12be80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CertifiedWhiteSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[85.3px] items-center justify-center overflow-clip p-0 relative shrink-0 w-[50px]"
      data-name="certified_white.svg fill"
    >
      <Component27 />
    </div>
  );
}

function CertifiedCorporation1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-[15px] max-w-[146.25px] overflow-clip p-0 top-0 w-[50px]"
      data-name="Certified Corporation"
    >
      <CertifiedWhiteSvgFill />
    </div>
  );
}

function Component28() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Component 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g clipPath="url(#clip0_8_344)" id="Component 2">
          <path d={svgPaths.p165d1980} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_8_344">
            <rect fill="white" height="50" width="50" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkedInSvgFill() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative shrink-0 size-[50px]"
      data-name="linked-in.svg fill"
    >
      <Component28 />
    </div>
  );
}

function LinkedIn() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start max-w-[146.25px] overflow-clip p-0 relative shrink-0 w-[50px]"
      data-name="LinkedIn"
    >
      <LinkedInSvgFill />
    </div>
  );
}

function Link3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-start justify-start left-[15px] p-0 right-[15px] top-[106.63px]"
      data-name="Link"
    >
      <LinkedIn />
    </div>
  );
}

function Separator4() {
  return (
    <div className="absolute h-0.5 left-[15px] right-[15px] top-[171.63px]" data-name="Separator">
      <div
        aria-hidden="true"
        className="absolute border-[#3f5588] border-[2px_0px_0px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[188.63px] left-0 right-3/4 top-0" data-name="Container">
      <CertifiedCorporation1 />
      <Link3 />
      <Separator4 />
    </div>
  );
}

function Container64() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="flex flex-col font-['Nunito_Sans:Regular',_sans-serif] font-normal justify-center leading-[21.33px] relative shrink-0 text-[#ffffff] text-[14.7px] text-left w-full"
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      >
        <p className="block mb-0">Modern Energy became a Certified B Corporation in 2017.</p>
        <p className="block mb-0">B Corps are a new type of company that uses the power of</p>
        <p className="block mb-0">business to solve social and environmental problems. Modern</p>
        <p className="block mb-0">Energy was certified by the non-profit B Lab to meet rigorous</p>
        <p className="block mb-0">standards of social and environmental performance,</p>
        <p className="block mb-0">accountability, and transparency. We’ve evaluated how our</p>
        <p className="block mb-0">practices impact our employees, our community, the</p>
        <p className="block">environment, and our customers.</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-start left-1/4 min-h-px pb-[15px] pt-0 px-[15px] right-0 top-[-0.85px]"
      data-name="Container"
    >
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[188.63px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Container"
    >
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Container"
    >
      <Container62 />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[1170px]"
      data-name="Container"
    >
      <Container68 />
    </div>
  );
}

function Component29() {
  return (
    <div className="h-[14.66px] relative w-[14.67px]" data-name="Component 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Component 4">
          <path d={svgPaths.p2a1ab000} fill="var(--fill-0, #3F5588)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Container"
    >
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Component29 />
        </div>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div
      className="absolute bg-[#f0f2f6] box-border content-stretch flex flex-col items-center justify-start left-1/2 pb-[12.34px] pt-[13px] px-0 shadow-[0px_0px_20px_0px_rgba(63,85,136,0.25)] size-10 top-[-20px] translate-x-[-50%]"
      data-name="Link"
    >
      <Container70 />
    </div>
  );
}

function Background4() {
  return (
    <div
      className="bg-[#3f5588] box-border content-stretch flex flex-col items-center justify-start pb-20 pt-[120px] px-0 relative shrink-0 w-full"
      data-name="Background"
    >
      <Container56 />
      <Container69 />
      <Link4 />
    </div>
  );
}

export default function Component1440WLight() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="1440w light"
    >
      <Background />
      <Container55 />
      <Background4 />
    </div>
  );
}