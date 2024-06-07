# Contributing to the Project: Adding Your Own Event

In this guide, you will learn how to fork a repository, make changes to a file, and submit a pull request. This example will walk you through adding a new event to the `src/data/events.ts` file.

## Step 1: Fork the Repository

1. **Navigate to the Repository**: Go to the GitHub page of the repository you want to contribute to.
2. **Fork the Repository**: Click on the "Fork" button at the top-right corner of the page. This will create a copy of the repository under your own GitHub account.

## Step 2: Clone Your Fork

1. **Clone the Repository**: Open your terminal and run the following command to clone the repository to your local machine.

    ```sh
    git clone https://github.com/Forsrobin/Utlandsfest
    ```

2. **Navigate to the Repository Directory**:

    ```sh
    cd Utlandsfest
    ```

## Step 3: Create a New Branch

Before making changes, create a new branch to keep your work organized

* Navigate to the Repository Directory:

    ```sh
    cd Utlandsfest
    ```

## Step 4: Edit the `events.ts` File

1. **Open the File**: Open the `src/data/events.ts` file in your preferred code editor.
2. **Add Your Event**: Add a new event to the file. Ensure it follows the format and structure of the existing events. Here's an example of how you might add a new event:

    ```typescript
    // src/data/events.ts

    export const events = [
      // existing events...

      {
        id: 'unique-event-id',
        title: 'My New Event',
        date: '2024-12-25',
        description: 'This is a description of my new event.',
        location: 'New York, NY',
      },
    ];
    ```

## Step 5: Commit Your Changes

1. **Stage the Changes**:

    ```sh
    git add src/data/events.ts
    ```

2. **Commit the Changes**:

    ```sh
    git commit -m "Add new event: My New Event"
    ```

## Step 6: Push your changes

Push your new branch to your forked repository on GitHub.

*  
    ```sh
    git push origin add-new-event
    ```

## Step 7: Create a Pull Request

  1. Navigate to Your Forked Repository: Go to your forked repository on GitHub.

  2. Compare & Pull Request: You should see a prompt to create a pull request for your recently pushed branch. Click on the "Compare & pull request" button.

  3. Fill Out the Pull Request Form: Provide a meaningful title and description for your pull request. Describe what changes you have made and why they should be merged.

  4. Create the Pull Request: Click on the "Create pull request" button to submit your pull request for review.