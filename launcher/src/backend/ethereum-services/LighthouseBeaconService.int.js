import { HetznerServer } from '../HetznerServer.js'
import { NodeConnection } from '../NodeConnection.js'
import { ServicePort, servicePortProtocol } from './ServicePort.js'
import { StringUtils } from '../StringUtils.js'
import { ServiceManager } from '../ServiceManager.js'
import { LighthouseBeaconService } from './LighthouseBeaconService.js'
import { LighthouseValidatorService } from './LighthouseValidatorService.js'
const log = require('electron-log')

jest.setTimeout(1000000)

test('lighthouse validator import', async () => {
    //create server
    const testServer = new HetznerServer()
    const serverSettings = {
        name: 'Lighthouse--integration-test--ubuntu-2204',
        image: 'ubuntu-22.04',
        location: 'fsn1',
        server_type: 'cpx21',
        start_after_create: true,
    }
    await testServer.create(serverSettings)
    log.info('server started')

    const connectionParams = {
        host: testServer.serverIPv4,
        port: '22',
        username: 'root',
        password: testServer.serverRootPassword,
        privatekey: undefined
    }

    //connect to server
    const nodeConnection = new NodeConnection(connectionParams)
    const serviceManager = new ServiceManager(nodeConnection)
    await testServer.connect(nodeConnection)

    //change password
    await testServer.passwordAuthentication(testServer.serverRootPassword)

    //attach to subnetwork
    await testServer.attachToNetwork('eth2-prater', '10.10.0.137')
    log.info('server attached to network')

    //prepare node
    nodeConnection.settings = { stereum: { settings: { controls_install_path: '/opt/stereum', os_user: 'stereum', updates: { in_progress: '', lane: 'stable', available: '', unattended: { check: true, install: false } } } } }
    await nodeConnection.prepareStereumNode(nodeConnection.settings.stereum.settings.controls_install_path);

    let ports = [
        new ServicePort(null, 9000, 9000, servicePortProtocol.tcp),
        new ServicePort(null, 9000, 9000, servicePortProtocol.udp),
        new ServicePort('127.0.0.1', 5052, 5052, servicePortProtocol.tcp)
    ]
    let lhBC = LighthouseBeaconService.buildByUserInput('prater', ports, nodeConnection.settings.stereum.settings.controls_install_path + '/lighthouse', [], '16')
    //change out http address for integration test
    const index = lhBC.command.findIndex(element => element.includes('--eth1-endpoints='))
    lhBC.command[index] = '--eth1-endpoints=http://10.10.0.3:8545'

    ports = [
        new ServicePort('127.0.0.1', 5062, 5062, servicePortProtocol.tcp)
    ]
    let lhVC = LighthouseValidatorService.buildByUserInput('prater', ports, nodeConnection.settings.stereum.settings.controls_install_path + '/lighthouse', [lhBC], 'stereum.net')

    //write configs for lighhouse BC and VC
    await nodeConnection.writeServiceConfiguration(lhBC.buildConfiguration())
    await nodeConnection.writeServiceConfiguration(lhVC.buildConfiguration())

    //start BC and VC
    await serviceManager.manageServiceState(lhBC.id, 'started')
    await serviceManager.manageServiceState(lhVC.id, 'started')

    //Waiting for the service to start properly
    await testServer.Sleep(300000)

    //import validator
    const extraVars = {
        stereum_role: 'validator-import-api', consClient: 'lighthouse', validator_password: 'MyTestPassword', validator_service: lhVC.id , validator_keys:
            [{ name: 'keystore-m_12381_3600_0_0_0-1637577658.json', content: ['{"crypto": {"kdf": {"function": "scrypt", "params": {"dklen": 32, "n": 262144, "r": 8, "p": 1, "salt": "de4b32f49572c01146afb11a82c326fdc03be6cf447983daf9eb7ec0f868a116"}, "message": ""}, "checksum": {"function": "sha256", "params": {}, "message": "1ccb24f0f1469ab56cc0147dae242aab59ff360177c8ec4f710966913da839b6"}, "cipher": {"function": "aes-128-ctr", "params": {"iv": "a24857026939492f49444679544cb6bb"}, "message": "b5d944adfb65e33873c5c1b809c3c15b558821f2829cd7e9da1df65d0b78fdb6"}}, "description": "", "pubkey": "acaa51756fb445b406c9e599f3f4bec991f7799c002619566ab1fa5b70445c62f1ac6561154ca5e49d7542dbe690b96b", "path": "m/12381/3600/0/0/0", "uuid": "1ea9ed13-e3bb-4555-99d9-c5e83ab9eb67", "version": 4}'] },
            { name: 'keystore-m_12381_3600_1_0_0-1637577659.json', content: ['{"crypto": {"kdf": {"function": "scrypt", "params": {"dklen": 32, "n": 262144, "r": 8, "p": 1, "salt": "de4b32f49572c01146afb11a82c326fdc03be6cf447983daf9eb7ec0f868a116"}, "message": ""}, "checksum": {"function": "sha256", "params": {}, "message": "3691a02425a4607b86292313cc72e31d4866043034ee9cff0b7cab2096105269"}, "cipher": {"function": "aes-128-ctr", "params": {"iv": "a24857026939492f49444679544cb6bb"}, "message": "e8a184e9d70408acd33459c67632c7bb63cf9c58a175de2030f962da88a2eb4d"}}, "description": "", "pubkey": "82ed748ffbc23ee3b730577a81f4cd05fe7dba234b3de5efc31f53de67091de9631d8581d72892351dfad52b65e53fbf", "path": "m/12381/3600/1/0/0", "uuid": "f712f984-b926-4e90-a603-f3f14703bf4b", "version": 4}'] },
            { name: 'keystore-m_12381_3600_2_0_0-1637577660.json', content: ['{"crypto": {"kdf": {"function": "scrypt", "params": {"dklen": 32, "n": 262144, "r": 8, "p": 1, "salt": "de4b32f49572c01146afb11a82c326fdc03be6cf447983daf9eb7ec0f868a116"}, "message": ""}, "checksum": {"function": "sha256", "params": {}, "message": "fa52987837af01ec48e2b21f2078acef3368983943751013758052e07dae841d"}, "cipher": {"function": "aes-128-ctr", "params": {"iv": "a24857026939492f49444679544cb6bb"}, "message": "8c055c8c504cd3ad20bcb1101431b2b1a506b1a4d0efdbd294d75c39c0f2268b"}}, "description": "", "pubkey": "948f092cb5b5cae121fdc14af0e4e5a90d03ab661266b700ded1c1ca4fd6f0a76f8dac187815409197bf036675571458", "path": "m/12381/3600/2/0/0", "uuid": "c7521eed-533a-4fd1-90b7-ad1aa0f24a2d", "version": 4}'] }
            ]
    }
    await nodeConnection.runPlaybook('validator-import-api', extraVars)

    //Waiting for the service to start properly
    await testServer.Sleep(180000)

    //get logs
    const BCstatus = await nodeConnection.sshService.exec(`docker logs stereum-${lhBC.id}`)
    const VCstatus = await nodeConnection.sshService.exec(`docker logs --tail=150 stereum-${lhVC.id}`)
    const ufw = await nodeConnection.sshService.exec('ufw status')
    const docker = await nodeConnection.sshService.exec('docker ps')
    const api_token = await nodeConnection.sshService.exec(`cat /opt/stereum/lighthouse-${lhVC.id}/validator/validators/api-token.txt`)

    // destroy
    await nodeConnection.destroyNode()
    await nodeConnection.sshService.disconnect()
    await testServer.destroy()

    //check ufw
    expect(ufw.stdout).toMatch(/9000\/tcp/)
    expect(ufw.stdout).toMatch(/9000\/udp/)
    expect(ufw.stdout).toMatch(/5052\/tcp/)
    expect(ufw.stdout).toMatch(/5062\/tcp/)

    //check for api_token file
    expect(api_token.stdout).toBeTruthy()

    //check docker container
    expect(docker.stdout).toMatch(/sigp\/lighthouse/)
    expect(docker.stdout).toMatch(/5052->5052/)
    expect(docker.stdout).toMatch(/5062->5062/)
    expect(docker.stdout).toMatch(/9000->9000/)
    expect((docker.stdout.match(new RegExp('Up', 'g')) || []).length).toBe(2)

    //check lighthouse BC logs
    expect(BCstatus.stderr).toMatch(/est_time/)
    expect(BCstatus.stderr).not.toMatch(/Failed to start beacon node/)

    //check lighthouse VC logs
    expect(VCstatus.stderr).toMatch(/pubkey:/)
    expect(VCstatus.stderr).toMatch(/Connected to beacon node/)
    expect(VCstatus.stderr).not.toMatch(/Offline beacon node/)
    
})