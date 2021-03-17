seed-database creates the requisite db, tables and user and populates tables with seed data; it consumes as a positional argument the password the backend will need to use to connect
purge-database removes all that so seed-database can be run again from a clean slate if something is messed up
both must be run with sudo
