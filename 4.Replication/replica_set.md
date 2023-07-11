c:data/ create folder rs1, rs2, rs3
```js
go=>  c: bin> 

```
start mongod -replSet myset -logpath \data\rs1\1.log --dbpath \data\rs1 --port 27018
```
start mongod -replSet myset -logpath \data\rs2\2.log --dbpath \data\rs2 --port 27019
```
start mongod -replSet myset -logpath \data\rs3\3.log --dbpath \data\rs3 --port 27020
```
bin> ```mongo --port 27018
or 
go=> ```mongosh directory => bin>mongosh --port 27018
```
config={_id:"myset", member:[{_id:0, host:"localhost:27018"},{_id:1, host:"localhost:27019"}, {_id:2,host:"localhost:27020"}]}
```js
>rs.initiate(config)
>rs.status()


open cmd>mongo --port 27019
>show dbs
no show 

>rs.slaveOk()

```