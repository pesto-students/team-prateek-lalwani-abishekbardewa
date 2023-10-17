## Question 1: Normalization

Consider the following unnormalized table for a bookstore database:

| Book ID | Title                 | Author              | Genre   | Publisher     | ISBN           | Price |
| ------- | --------------------- | ------------------- | ------- | ------------- | -------------- | ----- |
| 101     | To Kill a Mockingbird | Harper Lee          | Fiction | HarperCollins | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner      | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Jearl Walker        | Science | Wiley         | 978-0321976444 | 50.00 |

Normalize the table to 1NF, 2NF, and 3NF, explaining the steps you took at each normalization level.
Answer:
1NF : The given table is already in 1NF because each column contains atomic values and there are no repeating groups.
2NF: The table is already in 2NF because all non-key attributes are functionally dependent on the entire primary key (Book ID).
3NF: To achieve 3NF, we need to ensure that the table is in 2NF, and there are no transitive dependencies. In other words, all non-key attributes should be directly dependent on the primary key.

In the given table, there is a transitive dependency between Publisher and Book ID via Title. This means that Publisher depends on a non-key attribute (Title) rather than directly on the primary key (Book ID).

To remove this transitive dependency and achieve 3NF, we create two separate tables: one for books and another for publishers.

| Book ID | Title                 | Author              | Genre   | ISBN           | Price |
| ------- | --------------------- | ------------------- | ------- | -------------- | ----- |
| 101     | To Kill a Mockingbird | Harper Lee          | Fiction | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Jearl Walker        | Science | 978-0321976444 | 50.00 |

| Book ID | Publisher     | Publisher ID |
| ------- | ------------- | ------------ |
| 101     | HarperCollins | 01           |
| 102     | Scribner      | 02           |
| 103     | Wiley         | 03           |

## [Bonus]Question 2: Database Normalization Practice

Apply Normalization on the below table and return the list of tables after 1NF, 2NF, 3NF, 4NF, 5NF( if applicable)

### Table: Employee Information

| Employee ID | Employee Name | Department | Project ID | Project Name | Start Date | End Date   | Salary |
| ----------- | ------------- | ---------- | ---------- | ------------ | ---------- | ---------- | ------ |
| 101         | John Doe      | HR         | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000   |
| 101         | John Doe      | HR         | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200   |
| 102         | Jane Smith    | Marketing  | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500   |
| 103         | Mike Johnson  | IT         | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000   |
| 103         | Mike Johnson  | IT         | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200   |
| 104         | Sarah Brown   | HR         | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800   |
| 105         | Robert Lee    | Finance    | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200   |
| 106         | Lisa Wang     | IT         | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800   |

### Step-by-Step Guidelines:

### Step 1: First Normal Form (1NF)

Ensure each column contains atomic values.
Eliminate repeating groups.
Result: The table should not contain any repeating groups.

All the entries are atomic and there is a composite primary key (Employee ID, Project ID) so the table is in the first normal form (1NF).

### Step 2: Second Normal Form (2NF)

Identify the primary key(s).
Eliminate partial dependencies.
Result: The table should be in 2NF with separate tables for each entity and its attributes.
As we had composite primary key (Employee ID, Project ID), other non primary key columns are not fully depended on it so we are separating them to two different table. Now in employee table non primary key columns is completely dependent on primary key(Employee ID ) same goes for project table with primary key(Project ID)

| Employee ID | Employee Name | Department | Salary |
| ----------- | ------------- | ---------- | ------ |
| 101         | John Doe      | HR         | 5200   |
| 102         | Jane Smith    | Marketing  | 5500   |
| 103         | Mike Johnson  | IT         | 6200   |
| 104         | Sarah Brown   | HR         | 4800   |
| 105         | Robert Lee    | Finance    | 5200   |
| 106         | Lisa Wang     | IT         | 5800   |

| Project ID | Project Name | Start Date | End Date   |
| ---------- | ------------ | ---------- | ---------- |
| 001        | Project A    | 2023-01-15 | 2023-06-30 |
| 002        | Project B    | 2023-04-01 | 2023-08-31 |
| 003        | Project C    | 2023-06-15 | 2023-11-30 |

### Step 3: Third Normal Form (3NF)

Remove transitive dependencies.
Result: The table should be in 3NF with separate tables for each relationship.
Not applicable after converting to 2NF we do not have any transitive dependencies. Each non primary key column is only dependent on primary key

### Step 4: Fourth Normal Form (4NF)

Remove multi-valued dependencies.
Result: The table should be in 4NF with separate tables for independent multi-valued attributes.
Not applicable

### Step 5: Fifth Normal Form (5NF) [If Applicable]

Apply 5NF if the database has complex multi-valued relationships.
In some cases, 5NF may not be necessary, as it applies to certain complex databases. If 5NF is applicable, it usually deals with cases of lossless-join decompositions.

Note: The normalization process may involve additional steps and considerations depending on the complexity of the original table and the specific database design. Always aim to minimize redundancy, improve data integrity, and optimize the structure of the database.

Not applicable

## Question 3: What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?

In a relational database, primary keys and foreign keys are like special tools that help tables in the database talk to each other and keep things organized.

Primary Key:

Think of a primary key as a special code for each row in a table. It's like a fingerprint – it's unique for every row, so no two rows can have the same code. Also, it's like having a name tag; you can't forget it, so it can't be empty.

The primary key's job is to make sure data in the table stays neat and organized. It also helps create connections with other tables, like when we want to link information from one table to another.

Foreign Key:

A foreign key is like a bridge between two tables. It's a code in one table that connects to the primary key in another table. It's like saying, "This information here relates to that information there."

Foreign keys help keep everything in sync. They make sure that the data in one table matches the data in another table. This connection makes it easy to work with related data.

For example, if we have tables for orders and customers, we can use a foreign key in the orders table that points to the customer's code in the customers table. This way, we know which customer placed each order, and it prevents us from deleting an order without knowing which customer it belongs to. It's like a link that ties everything together.

## Question 4: Explain the ACID properties in the context of database transactions.

ACID is an acronym that stands for the four key properties that ensure the reliability of database transactions:

Atomicity: This property ensures that a transaction is treated as a single, indivisible unit. Either all the changes made within the transaction are committed, or none of them are. If any part of the transaction fails, the entire transaction is rolled back to its previous state, preserving data consistency.

Consistency: The consistency property guarantees that a transaction takes the database from one consistent state to another. The database should satisfy a set of integrity constraints before and after the transaction, ensuring that the data remains valid throughout the process.

Isolation: Isolation ensures that concurrent transactions do not interfere with each other. Transactions are executed as if they are the only operations in progress.

Durability: Durability guarantees that once a transaction is committed, its changes are permanent and will survive any subsequent failures, such as power outages or crashes. This typically involves writing the changes to a durable storage medium like a hard disk.

These ACID properties are crucial for maintaining data integrity and reliability in database systems. They ensure that even in the face of system failures or concurrent access by multiple users, the data remains consistent and reliable.

## Question 5: Describe the concept of indexing in a database. How does indexing improve query performance?

Indexing in a Database:
Indexing in a database is a method of optimizing data retrieval operations, such as SELECT queries, by creating data structures that allow the database management system (DBMS) to quickly locate specific records or rows within a table. These data structures store a subset of the table's data in a way that speeds up data access.

How Indexing Improves Query Performance:

Faster Data Retrieval: Indexes enable the DBMS to rapidly locate and retrieve data without scanning the entire table. Instead, it accesses a small, structured subset of the data, resulting in much faster query response times, especially for large datasets.

Reduced Disk I/O: By providing a direct path to the desired data, indexes reduce the need for extensive disk input/output (I/O) operations. This reduction in I/O can significantly boost the efficiency of read-heavy workloads.

Efficient Searching: Indexes are typically organized as data structures like B-trees or hash tables, making it possible to efficiently search for specific values. This is particularly beneficial for WHERE clause conditions, as it minimizes the number of rows that must be examined.

Support for Sorting: Indexes can also assist in sorting query results quickly, as the data is already pre-sorted within the index structure.

Types of Indexes: Databases offer different types of indexes, including primary indexes (often based on primary keys), secondary indexes (created on non-primary key columns), and full-text indexes (for effective text searching).

However, it's essential to use indexing judiciously, as indexes consume storage space, and there is a cost associated with maintaining them during data modifications (e.g., INSERT, UPDATE, DELETE operations). Striking a balance between the number and types of indexes and their impact on query performance and data modification performance is crucial.

## Question 6: Explain the concept of concurrency control, deadlocks in a multi-user database environment.

Concurrency Control:
Concurrency control is a fundamental concept in multi-user database systems that ensures multiple users or processes can access and modify a database concurrently without causing data inconsistencies or conflicts. Its primary goals are to maintain data integrity and isolation between transactions. Here's how it works:

Isolation Levels: Concurrency control often involves defining isolation levels, which determine the level of visibility a transaction has to the changes made by other concurrent transactions. Common isolation levels include Read Uncommitted, Read Committed, Repeatable Read, and Serializable.

Locking Mechanisms: Locks are used to control access to database resources. Transactions may acquire locks on data items to ensure that they have exclusive access or can read data without interference from other transactions. This helps prevent data anomalies and maintains data consistency.

Concurrency Control Protocols: Various protocols, such as two-phase locking and timestamp-based methods, manage the timing and order of transactions to avoid conflicts and ensure data consistency.

Deadlocks:
Deadlocks are a specific type of conflict that can occur in a multi-user database environment. A deadlock happens when two or more transactions are unable to proceed because each holds a resource needed by the other. This results in a standstill where no transaction can make progress. Key aspects of deadlocks include:

Four Conditions for Deadlocks: Deadlocks are usually caused by a combination of four conditions: mutual exclusion (resources can't be shared), hold and wait (transactions hold resources and wait for others), no preemption (resources can't be forcibly taken), and circular wait (a circular chain of transactions is waiting for resources).

Detection and Resolution: Deadlocks can be detected using algorithms like the wait-for graph and are resolved by aborting one or more transactions to break the deadlock. However, deadlock prevention strategies and careful system design are often preferred to avoid deadlocks from occurring in the first place.

In summary, concurrency control is essential in multi-user database systems to maintain data consistency and isolation among transactions. Deadlocks are a specific type of conflict that can arise in such environments, and they require strategies for detection and resolution to ensure system availability and reliability.

## Question 7: Read about Database sharding and explain couple of real time examples where, why, how it this concept is used.

Database Sharding:
Database sharding is a method of horizontally partitioning a large database into smaller, more manageable parts called shards. Each shard contains a subset of the data and operates on its own server or cluster. Sharding is employed to distribute data and queries across multiple servers, improving database performance, scalability, and availability.

Examples of Database Sharding:

E-commerce Platforms:

Why Sharding is Used: E-commerce websites often handle extensive databases, including customer profiles, order history, and product data. Sharding is utilized to distribute this data efficiently and enhance query performance to support a large number of users.
How it Works: Customer and order data can be sharded based on specific criteria, such as geographic location. Each shard contains data for customers in a particular region. By doing so, queries related to customers and orders can be directed to the appropriate shard, distributing the workload and improving query response times.
Gaming and Social Applications:

Why Sharding is Used: Online gaming platforms and social applications serve a vast user base and manage user profiles, game progress, and interactions. Sharding helps ensure smooth performance and rapid data retrieval.
How it Works: Sharding can be implemented based on user IDs, game servers, or geographic regions. Each shard is responsible for a specific range of user IDs or serves users in a particular area. This minimizes contention for data access and ensures that each shard can efficiently manage its subset of data.
Financial Services:

Why Sharding is Used: Financial institutions deal with massive volumes of transaction data, customer accounts, and market data. Sharding enhances data processing speed and maintains low-latency query responses.
How it Works: Sharding can be applied based on account types or specific branches or regions. Each shard manages a subset of accounts or transactions. This approach guarantees that financial transactions can be processed efficiently and maintains the data integrity needed in the financial sector.
In these examples, database sharding is applied to distribute data across multiple servers or clusters, preventing individual servers from becoming performance bottlenecks. It offers load balancing, scalability, and faster query responses. However, proper planning, data distribution strategies, and query routing mechanisms are essential for successful implementation.
