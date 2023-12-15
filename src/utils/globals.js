const ELEMENTS_PER_PAGE = 20;
// const API = 'http://karida-gpu.vm.wmi.amu.edu.pl:8000';
const API = 'http://127.0.0.1:8000';

const IS_MOBILE = () => {
  return document.body.clientWidth <= 768;
};

const TEST_TARGET_ITEMS = [
  {
    a: '2.1.1',
    b: 'Buoyancy Tank',
    c: '',
    d: `Buoyancy Tank In order to fulfill damage stability criteria a buoyance tank is to be fitted in cargo space forward of frame #101, as shown on General Arrangement drawing JK03102011 (see Appendix A Estimated steel weight: 21,25 ton. Tank top is to be located at Upper Deck level, 8000 above the base line. The tank is to be equipped as follows: Two (2) Manholes to be arranged in the transverse bulkhead frame #101. Two (2) air pipes ND 150 with air valve at top (stainless steel) located as protected as possible. O pipe starts just above bottom and the other one jus lead through the top of tank. Two (2) bilge suctions at aft end of tank connected the existing bilge system with separate valves supplemented on the existing bilge chest. One bilge alarm at center aft. Manual sounding from upper deck is to be establish Cross bar is to be located at lower part of sound pip as per normal standard. Paint treatment – see paint specification.`,
  },
  {
    a: '2.1.2',
    b: 'Foundation for CO2 Tanks',
    c: '',
    d: `Foundation for CO2 Tanks The yard shall install the foundations for the CO2 ta located at frames #37 & #83. Structural principles are shown on drawings 22574, 17422, 17423 & 22578 of a similar tank installation one of the Owners ships. These are in Appendix A4. The method of securing against longitudinal, transverse and vertical movement, rotation and ant floatation of the tank is shown on the same drawing A system of hardwood blocks is to be provided between the tank and foundations as shown on the drawings 22574, 17422, 17423 & 22578 in Appendi A4. The securing system, including the steel straps, anchors and tensioning arrangements, is to be provided and installed by the yard. At the foundations, the double bottom structure and side tank structure are to be strengthened. Preliminary design principles as follows: Reinforcements are to be carried out at the foundat at aft frame 32 – 42 and at fore frame 78 – 88.`,
  },
];

export { API, TEST_TARGET_ITEMS, ELEMENTS_PER_PAGE, IS_MOBILE };
