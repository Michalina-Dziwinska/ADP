db.people.insert({
  sex: 'Female',
  first_name: 'Michalina',
  last_name: 'Dziwinska',
  job: 'Quality Assurance Spec',
  email: 's14015@pjwstk.edu.pl',
  location: 
   { city: 'Warsaw',
     address: { streetname: 'Cybernetyki', streetnumber: '39' } },
  description: 'nnanananaa',
  height: '170',
  weight: '79',
  birth_date: '1996-11-24T06:07:03Z',
  nationality: 'Poland',
  credit: 
   [ { type: 'creditcard',
       number: '723980000666091234',
       currency: 'PLN',
       balance: '5117.06' } ] })
'DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany or bulkWrite.'
{ acknowledged: true,
  insertedIds: { '0': ObjectId("609936deb82c55407b3b0ede") } }
