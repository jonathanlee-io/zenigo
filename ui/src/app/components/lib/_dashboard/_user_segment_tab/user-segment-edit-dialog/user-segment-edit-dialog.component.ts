import {CommonModule} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ToggleSwitch} from 'primeng/toggleswitch';
import {TooltipModule} from 'primeng/tooltip';

interface User {
  id: string;
  name: string;
  email: string;
  initials: string;
  selected?: boolean;
}

interface Rule {
  id: string;
  type: string;
  operator: string;
  value: string;
  description: string;
}

interface UserSegment {
  id: string;
  key: string;
  name: string;
  description: string;
  active: boolean;
  users: User[];
  rules: Rule[];
}

@Component({
  selector: 'app-user-segment-edit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Dialog,
    ButtonModule,
    DropdownModule,
    ToggleSwitch,
    TooltipModule,
  ],
  templateUrl: './user-segment-edit-dialog.component.html',
  styleUrl: './user-segment-edit-dialog.component.scss',
})
export class UserSegmentEditDialogComponent {
  visible = signal<boolean>(false);
  searchQuery = '';
  searchResults: User[] = [];
  selectedUsers: User[] = [];
  allSelected = false;

  // Sample user segment data
  userSegment: UserSegment = {
    id: '1',
    key: 'beta_testers',
    name: 'Beta Testers',
    description: 'Users who have opted into beta features and early access',
    active: true,
    users: [
      {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        initials: 'JD',
        selected: false,
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        initials: 'JS',
        selected: false,
      },
      {
        id: '3',
        name: 'Alex Johnson',
        email: 'alex.johnson@example.com',
        initials: 'AJ',
        selected: false,
      },
    ],
    rules: [
      {
        id: '1',
        type: 'Account Age',
        operator: 'is greater than',
        value: '30 days',
        description: 'Users with accounts older than 30 days',
      },
    ],
  };

  open(segmentId: string) {
    console.log('Opening user segment edit dialog for segment:', segmentId);
    this.visible.set(true);
  }

  close() {
    this.searchQuery = '';
    this.searchResults = [];
    this.resetSelection();
    this.visible.set(false);
  }

  saveChanges() {
    // In a real app, you would save the changes
    // this.userSegmentService.updateSegment(this.userSegment).subscribe(() => {
    //   this.close();
    // });
    console.log('Saving changes to user segment:', this.userSegment);
    this.close();
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    // In a real app, you might want to show a toast notification
    console.log('Copied to clipboard:', text);
  }

  // User search related methods
  addUserToSegment() {
    if (!this.searchQuery.trim()) return;

    // In a real app, you would call an API to search for users
    // For now, simulate a search result
    this.searchResults = [
      {
        id: '4',
        name: 'Sarah Wilson',
        email: this.searchQuery.includes('@') ? this.searchQuery : `${this.searchQuery.toLowerCase()}@example.com`,
        initials: 'SW',
      },
      {
        id: '5',
        name: 'Michael Brown',
        email: 'michael.brown@example.com',
        initials: 'MB',
      },
    ];
  }

  selectUser(user: User) {
    // Check if user already exists in the segment
    const exists = this.userSegment.users.some((u) => u.id === user.id);

    if (!exists) {
      this.userSegment.users.push({...user, selected: false});
    }

    this.searchResults = [];
    this.searchQuery = '';
  }

  removeUser(user: User) {
    this.userSegment.users = this.userSegment.users.filter((u) => u.id !== user.id);
    this.updateSelectedStatus();
  }

  toggleAllUsers() {
    this.userSegment.users.forEach((user) => {
      user.selected = this.allSelected;
    });
    this.updateSelectedStatus();
  }

  updateSelectedStatus() {
    this.selectedUsers = this.userSegment.users.filter((u) => u.selected);
    this.allSelected = this.userSegment.users.length > 0 &&
      this.selectedUsers.length === this.userSegment.users.length;
  }

  removeSelectedUsers() {
    this.userSegment.users = this.userSegment.users.filter((u) => !u.selected);
    this.resetSelection();
  }

  resetSelection() {
    this.selectedUsers = [];
    this.allSelected = false;
    this.userSegment.users.forEach((user) => {
      user.selected = false;
    });
  }
}
