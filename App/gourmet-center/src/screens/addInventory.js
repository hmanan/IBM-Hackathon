import React, { Component } from "react";

/* COMPONENTS */
import CarbonHeader from "../components/CarbonHeader";
import { Tile, Button, Dropdown, NumberInput } from "carbon-components-react";

/* ICONS */
import Add32 from "@carbon/icons-react/lib/add/32";
import Close24 from "@carbon/icons-react/lib/close/24";
import Printer24 from "@carbon/icons-react/lib/printer/24";
import Checkbox24 from "@carbon/icons-react/lib/checkbox/24";


/* STYLES */
import "./addInventory.scss";

/* COMPONENTS */
import {
  DataTable,
  DataTableSkeleton,
  SkeletonText,
  ButtonSkeleton,
  Loading 
} from "carbon-components-react";

import Notification from '../components/Notification';
import { BarGraph } from "carbon-addons-data-viz-react";

/* TABLE COMPONENTS */
const {
  TableContainer,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableSelectAll,
  TableSelectRow
} = DataTable;

const TABLE_HEADERS = [
  {
    key: "id",
    header: "Name"
  },
  {
    key: "type",
    header: "Type"
  },
  {
    key: "stock",
    header: "In-Stock"
  },
  {
    key: "delta",
    header: "Recommended quantity for next order"
  }
];

const TYPE_OPTIONS = [
  {
    id: "default",
    text: "Type"
  },
  {
    id: "ingredient",
    text: "Ingredient"
  },
  {
    id: "item",
    text: "Item"
  }
];

const ITEM_OPTIONS = [
  {
    id: "default",
    text: "Item"
  },
  {
    id: "Bread",
    text: "Bread"
  },
  {
    id: "Scandinavian",
    text: "Scandinavian"
  },
  {
    id: "Hot chocolate",
    text: "Hot chocolate"
  },
  {
    id: "Jam",
    text: "Jam"
  },
  {
    id: "Cookies",
    text: "Cookies"
  },
  {
    id: "default",
    text: "Muffin"
  },
  {
    id: "Coffee",
    text: "Coffee"
  },
  {
    id: "Pastry",
    text: "Pastry"
  },
  {
    id: "Medialuna",
    text: "Medialuna"
  },
  {
    id: "Tea",
    text: "Tea"
  },
  {
    id: "Tartine",
    text: "Tartine"
  },
  {
    id: "Juice",
    text: "Juice"
  },
  {
    id: "Chicken sand",
    text: "Chicken sand"
  },
  {
    id: "Brioche and salami",
    text: "Brioche and salami"
  },
  {
    id: "Salad",
    text: "Salad"
  }
];

const data = [
  {
   type: "item",
   id: "Bread",
   stock: 20,
   delta: 15
  },
  {
    type: "item",
    id: "Scandinavian",
    stock: 10,
    delta: 15
  },
  {
    type: "item",
    id: "Hot chocolate",
    stock: 80,
    delta: 10
  },
  {
    type: "item",
    id: "Jam",
    stock: 10,
    delta:  0 },
  {
    type: "item",
    id: "Cookies",
    stock: 40,
    delta: 90
  },
  {
    type: "item",
    id: "Muffin",
    stock: 73,
    delta: 14
  },
  {
    type: "item",
    id: "Coffee",
    stock: 200,
    delta: 80
  },
  {
    type: "item",
    id: "Pastry",
    stock: 30,
    delta: 60
  },
  {
    type: "item",
    id: "Medialuna",
    stock: 20,
    delta: 15
  },
  {
    type: "item",
    id: "Tea",
    stock: 90,
    delta: 60
  },
  {
    type: "item",
    id: "Tartine",
    stock: 20,
    delta:  0 },
  {
    type: "item",
    id: "Juice",
    stock: 62,
    delta: 89
  },
  {
    type: "item",
    id: "Chicken sand",
    stock: 10,
    delta: 30
  },
  {
    type: "item",
    id: "Brioche and salami",
    stock: 2,
    delta: 34
  },
  {
    type: "item",
    id: "Salad",
    stock: 56,
    delta: 60
  }
];

const graphData = [
[   
    [20,
    15],
    "Bread"
   ],
   [
     [10,
     15],
     "Scandinavian"
   ],
   [
     [80,
     10],
     "Hot chocolate"
   ],
   [
     [10,
      0],
      "Jam",
    ],
   [
    [ 40,
     90],
     "Cookies"
   ],
   [
    [ 73,
     14],
     "Muffin"
   ],
   [
    [ 200,
     80],
     "Coffee",
   ],
   [
    [ 30,
     60],
     "Pastry",
   ],
   [
    [ 20,
     15],
     "Medialuna",
   ],
   [
     [90,
     60],
     "Tea"
   ],
   [
     [20,
      0],
      "Tartine"
    ],
   [
     [62,
     89],
     "Juice",
   ],
   [
    [ 10,
     30],
     "Chicken sand",
   ],
   [
     [2,
     34],
     "Brioche and salami",
   ],
   [
     [56,
     60],
     "Salad"
   ]
  ]

const graphProps = {
  width: 1700,
  color: ['#0000FF', '#FF0000'],
  xAxisLabel: "i t e m",
  yAxisLabel: "q u a n t i t y",
  emptyText: "No data",
  data: graphData
}

class addInventory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      added: [],
      type: "default",
      item: "default",
      amount: 0,
      showDb2: true,
      showPlaceholder: true,
      showNotification: false
    }
  }

  componentDidMount() {
    if (this.state.showPlaceholder === true) {
      setTimeout( () => {
        this.setState({ showDb2: false });
      }, 3000);

      setTimeout( () => {
        this.setState({ showPlaceholder: false})
      }, 6000)
    }
  };

  componentDidUpdate(prevProps, prevState) {

  };

  // addInventoryItem = () => {
  //   let added = this.state.added;
  //   const type = this.state.type;
  //   const item = this.state.item;
  //   const amount = this.state.amount;

  //   added.push({ type: type.text, item: item.text, amount: amount });

  //   this.setState({
  //     added: added,
  //     type: "default",
  //     item: "default",
  //     amount: 0
  //   });
  // }

  // renderItems = (addedItems) => {
  //   return (
  //     <>
  //       {
  //         addedItems.map((item, index) => {
  //           return (
  //             <div className="row styled">
  //               <h2 key={"item-" + index}>{item.type} - {item.item} - {item.amount} </h2>
  //               <Close24 onClick={() => { this.removeItem(item.item) }} />
  //             </div>
  //           )
  //         })
  //       }
  //     </>
  //   );
  // }

  // removeItem = (removeItem) => {
  //   let added = this.state.added;
  //   added = added.splice(added.findIndex(v => v.item === removeItem), 1);
  //   this.setState({ added: added });
  // }


  renderTableContent = ({ rows, headers, getHeaderProps }) => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(column => (
              <TableHeader key={column.header}>{column.header}</TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow className="table-row-clickable" key={row.id} >
              {row.cells.map(cell => (
                <TableCell key={cell.id}>{cell.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  renderSkeleton = headers => {
    return (
      <div>
        <h1 className="loader">
        <Loading withOverlay={false}/>
        {this.state.showDb2 ? "Loading store inventory from Db2" : "Forecasting customer orders by item type..."}
        </h1>
        <SkeletonText />
        <div className={"table-toolbar"}>
          <div className={"table-toolbar-spacer"} />
          <ButtonSkeleton className={"table-toolbar-item"} />
          <ButtonSkeleton className={"table-toolbar-item"} />
          <ButtonSkeleton className={"table-toolbar-item"} />
        </div>
        <DataTableSkeleton rowCount={8} headers={headers} />
      </div>
    );
  };

  renderTable() {
    return (
      <div>
        <div className="data-row">
          {this.state.showPlaceholder ? (
            this.renderSkeleton(TABLE_HEADERS)
          ) : (
              <DataTable
                rows={data}
                headers={TABLE_HEADERS}
                render={this.renderTableContent}
              />
            )}
        </div>
      </div>
    );
  }

  render() {

    return (
      <>
        <CarbonHeader />

        <div className="header-inv">
         {/* <Tile>
            <h1>Update Inventory Count</h1>
            <div className="row">
              <Dropdown
                id="type-dropdown"
                label="type"
                labelText="type"
                items={TYPE_OPTIONS}
                itemToString={item => (item ? item.text : "")}
                selectedItem={this.state.type}
                onChange={({ selectedItem }) => { this.setState({ "type": selectedItem }); }}
              />

              <Dropdown
                id="item-dropdown"
                label="item"
                labelText="item"
                items={ITEM_OPTIONS}
                itemToString={item => (item ? item.text : "")}
                selectedItem={this.state.item}
                onChange={({ selectedItem }) => { this.setState({ "item": selectedItem }); }}
              />

              <NumberInput
                min={0}
                max={100}
                helperText="Inventory Count"
                value={this.state.amount}
                onChange={evt => {
                  this.setState({ amount: evt.nativeEvent.data });
                }}
              />
            </div>
            <Button onClick={() => { this.addInventoryItem() }}>Add <Add32 className="plus-icon" /></Button>
          </Tile>
        </div>
        <div className="header"> */}
        { !this.state.showPlaceholder && 
          <Tile>
            <h1>Inventory Breakdown</h1>
            <br/>
            <BarGraph {...graphProps}/>
            <div className="legend">
              <h2 className="legend-item"> <Checkbox24 className="current-icon"/> &nbsp;&nbsp;current stock</h2>
              <h2 className="legend-item"> <Checkbox24 className="order-icon"/>&nbsp;&nbsp;recommended next order amount</h2>
            </div>

            <div className="btn-submit">
            <h1>Store Inventory</h1>
            {/* {this.renderItems(this.state.added)} */}
              <Button onClick={() => { this.setState({ added: [], showNotification: true }) }}><Printer24 className="icon-white"/> &nbsp;&nbsp; Print PDF</Button>
            </div>
          </Tile>
        }
        </div>
        {this.renderTable()}
        {/* </div> */}
        {this.state.showNotification && (
          <Notification
            title="Downloading PDF"
            subtitle="Downloading Report"
            kind="success"
            caption={"2019-07-12"}
            onCloseButtonClick={this.resetNotification}
          />
        )}
      </>
    );
  }
}

export default addInventory;
