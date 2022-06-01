import { TekuBeaconService } from './TekuBeaconService.js'
import { networks } from './NodeService.js'
import { ServicePort, servicePortProtocol } from './ServicePort.js'

test('buildConfiguration', () => {
    const ports = [
      new ServicePort(null, 9001, 9001, servicePortProtocol.tcp),
      new ServicePort(null, 9001, 9001, servicePortProtocol.udp),
      new ServicePort('127.0.0.1', 5052, 5052, servicePortProtocol.tcp),
      new ServicePort('127.0.0.1', 5051, 5051, servicePortProtocol.tcp),
      new ServicePort('127.0.0.1', 8008, 8008, servicePortProtocol.tcp)
    ]
  
    jest.mock('./GethService')
    const GethService = require('./GethService')
    const mMock = jest.fn(() => { return 'http-endpoint-string' })
    GethService.GethService.mockImplementation(() => {
      return {
        buildExecutionClientHttpEndpointUrl: mMock,
        buildMinimalConfiguration: jest.fn(() => {
          return {
            id: 'geth-id',
            service: 'GethService'
          }
        })
      }
    })
  
    const tekuService = TekuBeaconService.buildByUserInput(networks.prater, ports, '/opt/stereum/teku', [new GethService.GethService()], 'stereum.net').buildConfiguration()
  
    expect(tekuService.command).toContain('--eth1-endpoints=http-endpoint-string')
    expect(tekuService.command).toContain('--network=prater')
    expect(tekuService.command).toContain('--validators-graffiti="stereum.net"')
    expect(tekuService.volumes).toHaveLength(1)
    expect(tekuService.volumes).toContain('/opt/stereum/teku-' + tekuService.id + '/data:/opt/app/data')
    expect(tekuService.ports).toHaveLength(5)
    expect(tekuService.id).toHaveLength(36)
    expect(tekuService.user).toMatch(/2000/)
    expect(tekuService.image).toMatch(/consensys\/teku/)
    expect(tekuService.configVersion).toBe(1)
  })

  test('buildConsensusClientHttpEndpointUrl', () => {
    const ports = [
      new ServicePort(null, 100, 200, servicePortProtocol.tcp),
      new ServicePort(null, 101, 202, servicePortProtocol.udp),
      new ServicePort('1.2.3.4', 303, 404, servicePortProtocol.udp)
    ]
  
    jest.mock('./GethService')
    const GethService = require('./GethService')
    const mMock = jest.fn(() => { return 'http-endpoint-string' })
    GethService.GethService.mockImplementation(() => {
      return {
        buildExecutionClientHttpEndpointUrl: mMock
      }
    })
  
    const tekuEndpoint = TekuBeaconService.buildByUserInput(networks.prater, ports, '/opt/stereum/teku', [], 'stereum.net').buildConsensusClientHttpEndpointUrl()
  
    expect(tekuEndpoint).toMatch(/http:\/\/stereum-.{36}:5051/)
  })

  test('getAvailablePorts', () => {
    const tekuServicePorts = TekuBeaconService.buildByUserInput(networks.prater, [], '/opt/stereum/teku', [], 'stereum.net').getAvailablePorts()
  
    expect(tekuServicePorts).toHaveLength(5)
  })

  test('network', () => {
    const tekuService = TekuBeaconService.buildByUserInput(networks.goerli, [], '/opt/stereum/teku', [], 'stereum.net').buildConfiguration()
  
    expect(tekuService.network).toMatch(/goerli/)
  })

  test('buildByConfiguration', () => {
    const tekuService = TekuBeaconService.buildByConfiguration({
      id: '423',
      service: 'TekuBeaconService',
      configVersion: 926,
      image: 'tekubeacon:v1.3.3.7',
      ports: ['0.0.0.0:1234:5678/tcp', '8.8.8.8:1234:5678/udp'],
      volumes: ['/opt/stereum/foo:/opt/app/data']
    })
  
    expect(tekuService.id).toBe('423')
    expect(tekuService.service).toBe('TekuBeaconService')
    expect(tekuService.configVersion).toBe(926)
    expect(tekuService.image).toBe('tekubeacon')
    expect(tekuService.imageVersion).toBe('v1.3.3.7')
    expect(tekuService.ports).toHaveLength(2)
    expect(tekuService.ports[0].destinationPort).toBe('1234')
    expect(tekuService.ports[1].servicePort).toBe('5678')
  
    expect(tekuService.volumes).toHaveLength(1)
    expect(tekuService.volumes[0]).toBeDefined()
  })

// EOF
