import {computed} from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

import {IssueDto} from '../../dtos/issues/Issue.dto';
import {IssueSectionDto} from '../../dtos/issues/IssueSection.dto';

type DemoState = {
  isLoading: boolean;
  currentlyDraggedIssue: IssueDto | null;
  currentlyDraggedIssueStartingSectionId: string | null;
  sections: IssueSectionDto[];
  currentlyFilteredAssignee: string;
};

const initialState: DemoState = {
  isLoading: true,
  currentlyDraggedIssue: null,
  currentlyDraggedIssueStartingSectionId: null,
  currentlyFilteredAssignee: '*',
  sections: [
    {
      id: '1',
      title: 'To-Do',
      issues: [
        {
          id: '1',
          title: 'Text overlapping',
          iconClass: 'pi-times-circle',
          type: 'BUG',
          assignee: 'Jonathan',
          color: 'bg-pink-200',
          isVisible: true,
          epicTitle: 'New Homepage',
          dueDate: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Add secrets',
          iconClass: 'pi-thumbs-up',
          type: 'STORY',
          assignee: 'Jonathan',
          color: 'bg-green-100',
          isVisible: true,
          epicTitle: 'New Homepage',
          dueDate: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '3',
          title: 'Investigate timeout',
          iconClass: 'pi-search',
          type: 'SPIKE',
          assignee: 'Jonathan',
          color: 'bg-yellow-200',
          isVisible: true,
          epicTitle: 'New Homepage',
          dueDate: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '4',
          title: 'Investigate library',
          iconClass: 'pi-search',
          type: 'SPIKE',
          assignee: 'Timothy',
          color: 'bg-yellow-200',
          isVisible: true,
          epicTitle: 'New Homepage',
          dueDate: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'In Progress',
      issues: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Ready for QA',
      issues: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '4',
      title: 'Done',
      issues: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
};

export const DemoStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
      return {
        addIssue: (sectionId: string, issue: IssueDto) => {
          const section = store
              .sections()
              .find((section) => section.id === sectionId);
          if (!section) {
            return;
          }
          section.issues.push(issue);
          const newSections = [
            ...store.sections().filter((section) => section.id !== sectionId),
          ];
          newSections.push(section);
          patchState(store, {sections: [...newSections]});
        },
        getSectionById: (sectionId: string) => {
          return store.sections().find((section) => section.id === sectionId);
        },
        updateVisibilityOnAssigneeUpdate: (assignee: string) => {
          const newSections = [...store.sections()];
          patchState(store, {currentlyFilteredAssignee: assignee});

          newSections.forEach((section) => {
            section.issues.forEach((issue) => {
              if (assignee === '*' || issue.assignee === assignee) {
                issue.isVisible = true;
              } else {
                issue.isVisible = false;
              }
            });
          });

          patchState(store, {sections: [...newSections]});
        },
        handleDragStart: (issue: IssueDto, sectionId: string) => {
          patchState(store, {
            currentlyDraggedIssue: issue,
            currentlyDraggedIssueStartingSectionId: sectionId,
          });
        },
        handleDrop: (sectionId: string) => {
          const currentlyDraggedIssue = store.currentlyDraggedIssue();
          const currentlyDraggedIssueStartingSectionId =
          store.currentlyDraggedIssueStartingSectionId();
          if (!currentlyDraggedIssue || !currentlyDraggedIssueStartingSectionId) {
            return;
          }
          const targetSection = store
              .sections()
              .find((section) => section.id === sectionId);
          if (!targetSection) {
            return;
          }
          const startingSection = store
              .sections()
              .find(
                  (section) =>
                    section.id === store.currentlyDraggedIssueStartingSectionId(),
              );
          if (!startingSection) {
            return;
          }
          if (targetSection.id === startingSection.id) {
            return;
          }
          startingSection.issues = [
            ...startingSection.issues.filter(
                (issue) => issue.id !== currentlyDraggedIssue.id,
            ),
          ];
          targetSection.issues.push(currentlyDraggedIssue);
          const newSections = [
            ...store
                .sections()
                .filter((section) => section.id !== startingSection.id)
                .filter((section) => section.id !== targetSection.id),
          ];
          newSections.push(startingSection);
          newSections.push(targetSection);
          patchState(store, {
            currentlyDraggedIssue: null,
            currentlyDraggedIssueStartingSectionId: null,
            sections: newSections,
          });
        },
        onLoadingComplete: () => {
          patchState(store, {isLoading: false});
        },
      };
    }),
    withComputed((store) => {
      return {
        sortedByIdSections: computed(() =>
          store
              .sections()
              .sort(
                  (section, otherSection) =>
                    Number(section.id) - Number(otherSection.id),
              ),
        ),
        assignees: computed(() =>
          Array.from(
              new Set(
                  store
                      .sections()
                      .flatMap((section) =>
                        section.issues.map((issue) => issue.assignee),
                      ),
              ),
          ),
        ),
      };
    }),
);
