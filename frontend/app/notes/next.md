# Next Steps

## Improve performance

* IO: Based on current constrains, read and write records to the server will impact performance a lot, and could also cause concurrency issues. To mitigate these problems, a caching/queuing mechanism will be helpful

* Data size over the wire: we currently get/post the whole table data from/to the server. Pagination aside, even we still read the whole table for the first fetch, we can save only the diffs afterwards. There are good libraries on both front and back end for json diff comparison

## Streamline Dev Workflow

* Due to time constrain, currently there are some manual configs needed on Nginx proxy during deployment. It will be nice to automate it

* CI and CD


