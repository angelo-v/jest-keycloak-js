
import KeycloakService from  'keycloak-js'

describe('keycloak', () => {
    it('just works', () => {
        expect(true).toBe(true);
        expect(KeycloakService).toBeDefined();
    });
});