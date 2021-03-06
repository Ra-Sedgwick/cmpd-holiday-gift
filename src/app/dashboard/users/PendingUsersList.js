// @flow
import * as React from 'react';
import DataTable from '../components/dataTable';
import { Row, Col } from 'react-bootstrap';
import Box from '../components/box';
import { TableHeaderColumn } from 'react-bootstrap-table';
import { getPendingUserList as getUserList } from 'api/user';
import type { UserType } from 'api/user';

const PAGE_TITLE = 'Pending Users';

export default class UsersList extends React.Component<{}> {
  actionCellFormatter(_cell: any, _row: UserType): React.Node {
    return (
      <div>
        <button className="btn btn-sm btn-primary">Show</button>
      </div>
    );
  }

  async fetch(
    page: number,
    search: ?string
  ): Promise<{ items: UserType[], totalSize: number, sizePerPage: number }> {
    const response: Object = await getUserList(page, search);
    return { items: response.items, totalSize: response.totalSize, sizePerPage: response.sizePerPage };
  }

  render(): React.Node {
    return (
      <Row>
        <Col xs={12}>
          <Box title={PAGE_TITLE}>
            <DataTable search={true} fetch={this.fetch} searchPlaceholder="Filter by last name">
              <TableHeaderColumn dataField="id" hidden isKey>
                Id
              </TableHeaderColumn>
              <TableHeaderColumn dataField="name_last">Last Name</TableHeaderColumn>
              <TableHeaderColumn dataField="name_first">First Name</TableHeaderColumn>
              <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
              <TableHeaderColumn dataField="phone">Phone</TableHeaderColumn>
              <TableHeaderColumn dataField="affiliation" dataFormat={cell => cell.type.toUpperCase()}>
                Affiliation
              </TableHeaderColumn>
              <TableHeaderColumn dataField="affiliation" dataFormat={cell => cell.name}>
                Location
              </TableHeaderColumn>
              <TableHeaderColumn dataField="id" dataFormat={this.actionCellFormatter}>
                Actions
              </TableHeaderColumn>
            </DataTable>
          </Box>
        </Col>
      </Row>
    );
  }
}
