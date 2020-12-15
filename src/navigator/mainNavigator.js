import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen315795Navigator from '../features/BlankScreen315795/navigator';
import BlankScreen215793Navigator from '../features/BlankScreen215793/navigator';
import BlankScreen115792Navigator from '../features/BlankScreen115792/navigator';
import BlankScreen015791Navigator from '../features/BlankScreen015791/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen315795: { screen: BlankScreen315795Navigator },
BlankScreen015791: { screen: BlankScreen015791Navigator },
BlankScreen215793: { screen: BlankScreen215793Navigator },
BlankScreen115792: { screen: BlankScreen115792Navigator },


    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
