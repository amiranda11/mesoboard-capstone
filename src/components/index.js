// icons
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// components
import Icon from './icons/Icon';
import NavDrawer from "./modals/NavDrawerModal/NavDrawer";
import NavDrawerModal from "./modals/NavDrawerModal/NavDrawerModal";
import AuthHeader from "./ui/AuthHeader";
import MesonLogo from './logos/MesonLogo';
import MesonLogoContainer from './logos/MesonLogoContainer';

// exporting components
export { Icon, NavDrawer, NavDrawerModal, AuthHeader, MesonLogo, MesonLogoContainer }

// exporting icon enum/options
export const ICON_OPTIONS = {
  caretDown: faCaretDown,
  bell: faBell,
  bars: faBars,
}