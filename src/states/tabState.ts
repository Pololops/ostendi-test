const initialState: TabType[] = [
  {
    id: 'tab_1',
    label: 'Tab 1',
    children: [
      {
        id: 'tab_1_1',
        label: 'Tab 1.1',
        children: [
          {
            id: 'tab_1_1_1',
            label: 'Tab 1.1.1',
            children: [
              {
                id: 'tab_1_1_1_1',
                label: 'Tab 1.1.1.1',
                children: [
                  {
                    id: 'tab_1_1_1_1_1',
                    label: 'Tab 1.1.1.1.1',
                    children: [
                      {
                        id: 'tab_1_1_1_1_1_1',
                        label: 'Tab 1.1.1.1.1.1',
                      },
                      {
                        id: 'tab_1_1_1_1_1_2',
                        label: 'Tab 1.1.1.1.1.2',
                      }
                    ]
                  },
                  {
                    id: 'tab_1_1_1_1_2',
                    label: 'Tab 1.1.1.1.2',
                  }
                ]
              },
              {
                id: 'tab_1_1_1_2',
                label: 'Tab 1.1.1.2',
              }
            ]
          },
          {
            id: 'tab_1_1_2',
            label: 'Tab 1.1.2',
          }
        ]
      },
      {
        id: 'tab_1_2',
        label: 'Tab 1.2',
      }
    ]
  },
  {
    id: 'tab_2',
    label: 'Tab 2',
    children: [
      {
        id: 'tab_2_1',
        label: 'Tab 2.1',
        children: [
          {
            id: 'tab_2_1_1',
            label: 'Tab 2.1.1',
            children: [
              {
                id: 'tab_2_1_1_1',
                label: 'Tab 2.1.1.1',
              },
            ]
          },
          {
            id: 'tab_2_1_2',
            label: 'Tab 2.1.2',
          },
          {
            id: 'tab_2_1_3',
            label: 'Tab 2.1.3',
          }
        ]
      },
      {
        id: 'tab_2_2',
        label: 'Tab 2.2',
        children: [
          {
            id: 'tab_2_2_1',
            label: 'Tab 2.2.1',
          },
          {
            id: 'tab_2_2_2',
            label: 'Tab 2.2.2',
          },
        ]
      }
    ]
  }
];

export default initialState;