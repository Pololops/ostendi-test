import Header from '../Header/Header';
import OsiTab from '../OsiTab/OsiTab';
import OsiTabs from '../OsiTabs/OsiTabs';
import Tabs from '../Tabs/Tabs';

import './App.css';
export default function App() {
  return (
    <>
      <Header />
      <Tabs>
        <OsiTabs id="tabs_0" label="Root tab bar">
          <OsiTab id="tab_1" label="Tab 1">
            <OsiTabs id="tabs_1" label="Tab bar1">
              <OsiTab id="tab_1_1" label="Tab 1.1">
                <OsiTabs id="tabs_1_1" label="Tab bar1.1">
                  <OsiTab id="tab_1_1_1" label="Tab 1.1.1">
                    <OsiTabs id="tabs_1_1_1" label="Tab bar1.1.1">
                      <OsiTab id="tab_1_1_1_1" label="Tab 1.1.1.1">
                        <OsiTabs id="tabs_1_1_1_1" label="Tab bar1.1.1.1">
                          <OsiTab
                            id="tab_1_1_1_1_1"
                            label="Tab 1.1.1.1.1"
                          ></OsiTab>
                          <OsiTab
                            id="tab_1_1_1_1_2"
                            label="Tab 1.1.1.1.2"
                          ></OsiTab>
                        </OsiTabs>
                      </OsiTab>
                      <OsiTab id="tab_1_1_1_2" label="Tab 1.1.1.2">
                        <OsiTabs id="tabs_1_1_1_2" label="Tab bar1.1.1.2">
                          <OsiTab
                            id="tab_1_1_1_2_1"
                            label="Tab 1.1.1.2.1"
                          ></OsiTab>
                          <OsiTab
                            id="tab_1_1_1_2_2"
                            label="Tab 1.1.1.2.2"
                          ></OsiTab>
                        </OsiTabs>
                      </OsiTab>
                    </OsiTabs>
                  </OsiTab>
                  <OsiTab id="tab_1_1_2" label="Tab 1.1.2">
                    <OsiTabs id="tabs_1_1_2" label="Tab bar1.1.2">
                      <OsiTab id="tab_1_1_2_1" label="Tab 1.1.2.1"></OsiTab>
                      <OsiTab id="tab_1_1_2_2" label="Tab 1.1.2.2"></OsiTab>
                    </OsiTabs>
                  </OsiTab>
                  <OsiTab id="tab_1_1_3" label="Tab 1.1.3">
                    <OsiTabs id="tabs_1_1_3" label="Tab bar1.1.3">
                      <OsiTab id="tab_1_1_3_1" label="Tab 1.1.3.1"></OsiTab>
                      <OsiTab id="tab_1_1_3_2" label="Tab 1.1.3.2"></OsiTab>
                      <OsiTab id="tab_1_1_3_3" label="Tab 1.1.3.3"></OsiTab>
                    </OsiTabs>
                  </OsiTab>
                </OsiTabs>
              </OsiTab>
              <OsiTab id="tab_1_2" label="Tab 1.2">
                <OsiTabs id="tabs_1_2" label="Tab bar1.2">
                  <OsiTab id="tab_1_2_1" label="Tab 1.2.1"></OsiTab>
                  <OsiTab id="tab_1_2_2" label="Tab 1.2.2"></OsiTab>
                  <OsiTab id="tab_1_2_3" label="Tab 1.2.3"></OsiTab>
                </OsiTabs>
              </OsiTab>
            </OsiTabs>
          </OsiTab>
          <OsiTab id="tab_2" label="Tab 2">
            <OsiTabs id="tabs_2" label="Tab bar2">
              <OsiTab id="tab_2_1" label="Tab 2.1">
                <OsiTabs id="tabs_2_1" label="Tab bar2.1">
                  <OsiTab id="tab_2_1_1" label="Tab 2.1.1"></OsiTab>
                  <OsiTab id="tab_2_1_2" label="Tab 2.1.2"></OsiTab>
                  <OsiTab id="tab_2_1_3" label="Tab 2.1.3"></OsiTab>
                </OsiTabs>
              </OsiTab>
              <OsiTab id="tab_2_2" label="Tab 2.2">
                <OsiTabs id="tabs_2_2" label="Tab bar2.2">
                  <OsiTab id="tab_2_2_1" label="Tab 2.2.1"></OsiTab>
                  <OsiTab id="tab_2_2_2" label="Tab 2.2.2"></OsiTab>
                  <OsiTab id="tab_2_2_3" label="Tab 2.2.3"></OsiTab>
                </OsiTabs>
              </OsiTab>
              <OsiTab id="tab_2_3" label="Tab 2.3">
                <OsiTabs id="tabs_2_3" label="Tab bar2.3">
                  <OsiTab id="tab_2_3_1" label="Tab 2.3.1"></OsiTab>
                  <OsiTab id="tab_2_3_2" label="Tab 2.3.2"></OsiTab>
                  <OsiTab id="tab_2_3_3" label="Tab 2.3.3"></OsiTab>
                </OsiTabs>
              </OsiTab>
            </OsiTabs>
          </OsiTab>
          <OsiTab id="tab_3" label="Tab 3">
            <OsiTabs id="tabs_3" label="Tab bar3">
              <OsiTab id="tab_3_1" label="Tab 3.1">
                <OsiTabs id="tabs_3_1" label="Tab bar3.1">
                  <OsiTab id="tab_3_1_1" label="Tab 3.1.1"></OsiTab>
                  <OsiTab id="tab_3_1_2" label="Tab 3.1.2"></OsiTab>
                  <OsiTab id="tab_3_1_3" label="Tab 3.1.3"></OsiTab>
                </OsiTabs>
              </OsiTab>
              <OsiTab id="tab_3_2" label="Tab 3.2">
                <OsiTabs id="tabs_3_2" label="Tab bar3.2">
                  <OsiTab id="tab_3_2_1" label="Tab 3.2.1"></OsiTab>
                  <OsiTab id="tab_3_2_2" label="Tab 3.2.2"></OsiTab>
                  <OsiTab id="tab_3_2_3" label="Tab 3.2.3"></OsiTab>
                </OsiTabs>
              </OsiTab>
            </OsiTabs>
          </OsiTab>
        </OsiTabs>
      </Tabs>
    </>
  );
}
