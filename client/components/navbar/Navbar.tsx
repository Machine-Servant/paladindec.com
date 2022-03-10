import React from 'react';
import { HamburgerButton } from '../hamburger-button';
import { Container } from './Navbar.styles';

type NavbarProps = {
  onHamburgerIconClick: () => void;
  sidebarHidden?: boolean;
};

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <Container>
      <div className="flex items-center justify-center w-16 h-full sm:justify-between">
        <div className="flex items-center sm:hidden">
          <HamburgerButton onClick={props.onHamburgerIconClick} />
        </div>
      </div>
    </Container>
  );

  // return (
  //   <Container>
  //     <ContainerInner>
  //       <div className="relative flex items-center justify-between h-16">
  //         <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
  //           <HamburgerButton
  //             onClick={() => setIsMobileNavMenuOpen((current) => !current)}
  //           />
  //         </div>

  //         <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  //           <ViewNotifications />

  //           <div className="relative ml-3">
  //             <div>
  //               <button
  //                 type="button"
  //                 className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
  //                 id="user-menu-button"
  //                 aria-expanded="false"
  //                 aria-haspopup="true"
  //                 onClick={() => setIsUserMenuOpen((current) => !current)}
  //               >
  //                 <span className="sr-only">Open user menu</span>
  //                 {user?.photoURL && (
  //                   <div className="w-8 h-8">
  //                     <Image
  //                       className="rounded-full"
  //                       layout="fill"
  //                       src={user?.photoURL}
  //                       alt=""
  //                     />
  //                   </div>
  //                 )}
  //               </button>
  //             </div>
  //             <UserMenu
  //               className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white bg-blue-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:bg-white-50"
  //               isHidden={!isUserMenuOpen}
  //               role="menu"
  //               aria-orientation="vertical"
  //               aria-labelledby="user-menu-button"
  //               tabIndex={-1}
  //             >
  //               <a
  //                 href="#"
  //                 className="block px-4 py-2 text-sm text-white-500 sm:text-blue-700"
  //                 role="menuitem"
  //                 tabIndex={-1}
  //                 id="user-menu-item-0"
  //               >
  //                 Your Profile
  //               </a>
  //               <a
  //                 href="#"
  //                 className="block px-4 py-2 text-sm text-white-500 sm:text-blue-700"
  //                 role="menuitem"
  //                 tabIndex={-1}
  //                 id="user-menu-item-1"
  //               >
  //                 Settings
  //               </a>
  //               <a
  //                 href="#"
  //                 className="block px-4 py-2 text-sm text-white-500 sm:text-blue-700"
  //                 role="menuitem"
  //                 tabIndex={-1}
  //                 id="user-menu-item-2"
  //                 onClick={handleSignout}
  //               >
  //                 Sign out
  //               </a>
  //             </UserMenu>
  //           </div>
  //         </div>
  //       </div>
  //     </ContainerInner>
  //     <div className="sm:hidden" id="mobile-menu">
  //       <MobileNavMenu
  //         isHidden={!isMobileNavMenuOpen}
  //         className="px-2 pt-2 pb-3 space-y-1"
  //       >
  //         <a
  //           href="#"
  //           className="block px-3 py-2 text-base font-medium bg-gray-900 rounded-md text-white-500"
  //           aria-current="page"
  //         >
  //           Dashboard
  //         </a>

  //         <a
  //           href="#"
  //           className="block px-3 py-2 text-base font-medium rounded-md text-white-800 hover:bg-gray-700 hover:text-white-500"
  //         >
  //           Team
  //         </a>

  //         <a
  //           href="#"
  //           className="block px-3 py-2 text-base font-medium rounded-md text-white-800 hover:bg-gray-700 hover:text-white-500"
  //         >
  //           Projects
  //         </a>

  //         <a
  //           href="#"
  //           className="block px-3 py-2 text-base font-medium rounded-md text-white-800 hover:bg-gray-700 hover:text-white-500"
  //         >
  //           Calendar
  //         </a>
  //       </MobileNavMenu>
  //     </div>
  //   </Container>
  // );
};
