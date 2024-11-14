const bands = require('express').Router()
const { Band, MeetGreet, Event, MusicSet } = require('../models')

bands.get('/', async (req, res) => {
  try {
    const allBands = await Band.findAll()
    res.json(allBands)
  } catch (e) {
    res.send(e.message)
  }
})

bands.get('/:id', async (req, res) => {
  try {
    const specificBand = await Band.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: MeetGreet,
          as: 'meetGreets',
          include: [{
            model: Event,
            as: 'event'
          }]
        },
        {
          model: MusicSet,
          as: 'sets',
          include: [{
            model: Event,
            as: 'event'
          }]
        }
      ]
    })
    res.json(specificBand)
  } catch (e) {
    res.send(e.message)
  }
})

bands.post('/', async (req, res) => {
  try {
    const newBand = await Band.create(req.body)
    res.json(newBand)
  } catch (e) {
    res.send(e.message)
  }
})

bands.put('/:id', async (req, res) => {
  try {
    const { name, genre } = req.body
    if (!name && !genre) {
      throw Error('No fields to update')
    }
    const [ numUpdated ] = await Band.update(
      { name, genre },
      { where: { id: req.params.id } }
    )
    res.send(`Updated ${numUpdated} band(s).`)
  } catch (e) {
    res.send(e.message)
  }
})

bands.delete('/:id', async (req, res) => {
  try {
    const deleted = await Band.destroy({
      where: { id: req.params.id }
    })
    res.send(`Deleted ${deleted} band(s).`)
  } catch (e) {
    res.send(e.message)
  }
})

module.exports = bands