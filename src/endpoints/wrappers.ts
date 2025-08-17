import { ApiClient } from '../runtime/client.js';
// Auto-generated lightweight wrappers. Regenerate with npm run generate
export async function get_api(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/api', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_api_generate(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/api/generate', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_api_id_delete(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/api/${id}/delete`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_account_info(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/account/info', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_actions_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/actions/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_v2_actions(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/v2/actions/', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_activity(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/activity', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_backups(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/backups', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_databases(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/databases', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_databases(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/databases', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_databases_cluster_id(client: ApiClient, cluster_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/databases/${cluster_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_databases_id_database(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/databases/${id}/database`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_databases_id_database_dbname(client: ApiClient, id: string, dbname: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/databases/${id}/database/${dbname}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_databases_id_user(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/databases/${id}/user`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_databases_db_id_user(client: ApiClient, db_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/databases/${db_id}/user`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_databases_id_database_dbname_user(client: ApiClient, id: string, dbname: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/databases/${id}/database/${dbname}/user`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_databases_id_trustedhost(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/databases/${id}/trustedhost/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_databases_id_trustedhost_trustedhost_ip(client: ApiClient, id: string, trustedhost_ip: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/databases/${id}/trustedhost/${trustedhost_ip}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_databases_db_id_cloud_id_certificate(client: ApiClient, db_id: string, cloud_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/databases/${db_id}/${cloud_id}/certificate`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_databases_db_id_backup(client: ApiClient, db_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/databases/${db_id}/backup`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_databases_db_id_securitygroup_firewall_id(client: ApiClient, db_id: string, firewall_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/databases/${db_id}/securitygroup/${firewall_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_databases_db_id_securitygroup_firewall_id(client: ApiClient, db_id: string, firewall_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/databases/${db_id}/securitygroup/${firewall_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_databases_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/databases/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_dns(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/dns', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_dns_domain(client: ApiClient, domain: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/dns/${domain}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_dns_adddomain(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/dns/adddomain', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_dns_domain_record_add(client: ApiClient, domain: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/dns/${domain}/record/add/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_dns_domain_delete(client: ApiClient, domain: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/dns/${domain}/delete`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_dns_domain_record_recordid_delete(client: ApiClient, domain: string, recordid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/dns/${domain}/record/${recordid}/delete/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_cloud(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/cloud/', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_cloud_cloudid(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/cloud/${cloudid}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_deploy(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/cloud/deploy/', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_cloud_images(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/cloud/images', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_cloud_cloudid_resizeplans(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/cloud/${cloudid}/resizeplans/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_snapshot_create(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/snapshot/create/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_cloud_cloudid_snapshot_snapshotid_delete(client: ApiClient, cloudid: string, snapshotid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/cloud/${cloudid}/snapshot/${snapshotid}/delete`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_cloud_cloudid_destroy(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/cloud/${cloudid}/destroy`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_backups_disable(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/backups/disable`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_backups_enable(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/backups/enable`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_billingcycle(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/billingcycle`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_hardreboot(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/hardreboot/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_powercycle(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/powercycle/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_poweroff(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/poweroff/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_poweron(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/poweron/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_rebuild(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/rebuild/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_resetpassword(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/resetpassword/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_resize(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/resize/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_snapshot_snapshotid_restore(client: ApiClient, cloudid: string, snapshotid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/snapshot/${snapshotid}/restore/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_storage_storageid_update(client: ApiClient, cloudid: string, storageid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/storage/${storageid}/update`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_assignpublicip(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/assignpublicip`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloud_id_updaterdns_ip_address(client: ApiClient, cloud_id: string, ip_address: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloud_id}/updaterdns/${ip_address}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_cloud_1637583_ip_public_ip_delete(client: ApiClient, public_ip: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/cloud/1637583/ip/${public_ip}/delete`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_enablerescue(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/enablerescue`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_disablerescue(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/disablerescue`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_mountiso(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/mountiso`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_umountiso(client: ApiClient, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/umountiso`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_firewall(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/firewall', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_firewall_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/firewall/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_firewall_create(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/firewall/create', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_firewall_firewall_id_rule_add(client: ApiClient, firewall_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/firewall/${firewall_id}/rule/add`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_firewall_firewall_id_rule_rule_id_delete(client: ApiClient, firewall_id: string, rule_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/firewall/${firewall_id}/rule/${rule_id}/delete`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_firewall_firewall_id_server_add(client: ApiClient, firewall_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/firewall/${firewall_id}/server/add`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_firewall_id_server_cloudid_delete(client: ApiClient, id: string, cloudid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/firewall/${id}/server/${cloudid}/delete`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_firewall_id_destroy(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/firewall/${id}/destroy`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_iso(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/iso', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_iso_add(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/iso/add', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_iso_id_delete(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/iso/${id}/delete`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_v2_kubernetes(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/v2/kubernetes', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_kubernetes_k8_id(client: ApiClient, k8_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/kubernetes/${k8_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_kubernetes_deploy(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/kubernetes/deploy', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_kubernetes_id_loadbalancer_loadbalancer_id(client: ApiClient, id: string, loadbalancer_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/kubernetes/${id}/loadbalancer/${loadbalancer_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_kubernetes_id_loadbalancer_loadbalancer_id(client: ApiClient, id: string, loadbalancer_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/kubernetes/${id}/loadbalancer/${loadbalancer_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_kubernetes_id_securitygroup_securitygroup_id(client: ApiClient, id: string, securitygroup_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/kubernetes/${id}/securitygroup/${securitygroup_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_kubernetes_id_securitygroup_securitygroup_id(client: ApiClient, id: string, securitygroup_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/kubernetes/${id}/securitygroup/${securitygroup_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_kubernetes_id_targetgroup_targetgroup_id(client: ApiClient, id: string, targetgroup_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/kubernetes/${id}/targetgroup/${targetgroup_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_kubernetes_id_targetgroup_targetgroup_id(client: ApiClient, id: string, targetgroup_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/kubernetes/${id}/targetgroup/${targetgroup_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_kubernetes_id_destroy(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/kubernetes/${id}/destroy`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_kubernetes_id_download(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/kubernetes/${id}/download`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_v2_kubernetes_id_stop(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/v2/kubernetes/${id}/stop`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_kubernetes_id_start(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/kubernetes/${id}/start`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_kubernetes_id_nodepool_id_update(client: ApiClient, id: string, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/kubernetes/${id}/nodepool/${id}/update`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_kubernetes_k8_id_nodepool_ipool_id_update(client: ApiClient, k8_id: string, ipool_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/kubernetes/${k8_id}/nodepool/${ipool_id}/update`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_kubernetes_k8_id_nodepool_add(client: ApiClient, k8_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/kubernetes/${k8_id}/nodepool/add`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_loadbalancer_id_acl(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/loadbalancer/${id}/acl/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_loadbalancer_id_route(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/loadbalancer/${id}/route/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_loadbalancer_id_backend(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/loadbalancer/${id}/backend/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_loadbalancer_id_frontend(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/loadbalancer/${id}/frontend`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_loadbalancer_id_frontend(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/loadbalancer/${id}/frontend`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_loadbalancer_add(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/loadbalancer/add/', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_loadbalancer_id_acl_acl_id(client: ApiClient, id: string, acl_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/loadbalancer/${id}/acl/${acl_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_loadbalancer_id_acl_acl_id(client: ApiClient, id: string, acl_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/loadbalancer/${id}/acl/${acl_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_loadbalancer_id_backend_backend_id(client: ApiClient, id: string, backend_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/loadbalancer/${id}/backend/${backend_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_loadbalancer_id_frontend_frontend_id(client: ApiClient, id: string, frontend_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/loadbalancer/${id}/frontend/${frontend_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_loadbalancer_id_route_route_id(client: ApiClient, id: string, route_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/loadbalancer/${id}/route/${route_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_loadbalancer_id_route_route_id(client: ApiClient, id: string, route_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/loadbalancer/${id}/route/${route_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_loadbalancer_id_destroy(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/loadbalancer/${id}/destroy/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_loadbalancer_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/loadbalancer/${id}/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_loadbalancer(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/loadbalancer/', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_loadbalancer_id_update(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/loadbalancer/${id}/update`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_sqs(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/sqs', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_sqs(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/sqs', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_sqs_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/sqs/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_sqs_sqs_id_destroy(client: ApiClient, sqs_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/sqs/${sqs_id}/destroy`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_sqs_id_queue(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/sqs/${id}/queue`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_key(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/key', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_key_import(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/key/import', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_key_id_delete(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/key/${id}/delete`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_snapshot(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/snapshot', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_cloud_cloudid_snapshot_snapshotid_restore_2(client: ApiClient, cloudid: string, snapshotid: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/cloud/${cloudid}/snapshot/${snapshotid}/restore`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_user(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/user', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_user(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/user', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_user_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/user/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_user_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/user/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_user_subuser_id(client: ApiClient, subuser_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/user/${subuser_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_transfer_process(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/transfer/process/', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_transfer_resource_type_resource_id(client: ApiClient, resource_type: string, resource_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/transfer/${resource_type}/${resource_id}/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpc_create(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/vpc/create', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpc_id_destroy(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/vpc/${id}/destroy`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpc_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/vpc/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpc(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/vpc', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpn(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/vpn', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpn_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/vpn/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpn_deploy(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/vpn/deploy', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_vpn_id_destroy(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/vpn/${id}/destroy`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpn_vpn_id_user_add(client: ApiClient, vpn_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/vpn/${vpn_id}/user/add`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpn_id_user_user_name_download(client: ApiClient, id: string, user_name: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/vpn/${id}/user/${user_name}/download`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_vpn_id_user_user_name_remove(client: ApiClient, id: string, user_name: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/vpn/${id}/user/${user_name}/remove`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_autoscaling(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/autoscaling', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_autoscaling(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/autoscaling', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_autoscaling_policy(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/autoscaling/policy', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_autoscaling_id_schedulepolicy(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/autoscaling/${id}/schedulepolicy`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_autoscaling_id_schedulepolicy_schedulepolicy_id(client: ApiClient, id: string, schedulepolicy_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/autoscaling/${id}/schedulepolicy/${schedulepolicy_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_autoscaling_id_schedulepolicy_schedulepolicy_id(client: ApiClient, id: string, schedulepolicy_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/autoscaling/${id}/schedulepolicy/${schedulepolicy_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_autoscaling_id_schedulepolicy_schedulepolicy_id(client: ApiClient, id: string, schedulepolicy_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/autoscaling/${id}/schedulepolicy/${schedulepolicy_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_autoscaling_id_securitygroup_securitygroup_id(client: ApiClient, id: string, securitygroup_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/autoscaling/${id}/securitygroup/${securitygroup_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_autoscaling_id_securitygroup_securitygroup_id(client: ApiClient, id: string, securitygroup_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/autoscaling/${id}/securitygroup/${securitygroup_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_autoscaling_id_targetgroup_targetgroup_id(client: ApiClient, id: string, targetgroup_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/autoscaling/${id}/targetgroup/${targetgroup_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_autoscaling_id_targetgroup_targetgroup_id(client: ApiClient, id: string, targetgroup_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/autoscaling/${id}/targetgroup/${targetgroup_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_autoscaling_policy_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/autoscaling/policy/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_autoscaling_policy_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/autoscaling/policy/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_autoscaling_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/autoscaling/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_autoscaling_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/autoscaling/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_autoscaling_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/autoscaling/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_autoscaling_id_loadbalancer_loadbalancer_id(client: ApiClient, id: string, loadbalancer_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/autoscaling/${id}/loadbalancer/${loadbalancer_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_vpc_vpc_id(client: ApiClient, vpc_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/vpc/${vpc_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpc_subnet_create(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/vpc/subnet/create', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_vpc_subnet_subnet_id(client: ApiClient, subnet_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/vpc/subnet/${subnet_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpc_subnet(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/vpc/subnet', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpc_natgateway(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/vpc/natgateway', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_vpc_natgateway(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: '/vpc/natgateway', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpc_natgateway(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/vpc/natgateway', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_elasticip(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/elasticip', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_elasticip_allocate(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/elasticip/allocate', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_elasticip_ip_address_deallocate(client: ApiClient, ip_address: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/elasticip/${ip_address}/deallocate`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpc_peering(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/vpc/peering', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpc_peering(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/vpc/peering', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_vpc_peering(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: '/vpc/peering', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpc_route(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/vpc/route', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpc_route(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/vpc-route', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_vpc_route(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: '/vpc-route', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpc_internetgateway(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/vpc-internetgateway', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_vpc_internetgateway(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: '/vpc-internetgateway', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpc_internetgateway(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/vpc-internetgateway', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpc_internetgateway_id_attach(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/vpc-internetgateway/${id}/attach`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpc_internetgateway_234236_dettach(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/vpc-internetgateway/234236/dettach', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpc_route_table(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/vpc-route-table', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_vpc_route_table(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: '/vpc-route-table', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpc_route_table(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/vpc-route-table', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpc_subnet_associate(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/vpc/subnet/associate', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_vpc_subnet_associate(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/vpc/subnet/associate', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_vpc_subnet_dissociate(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/vpc/subnet/dissociate', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_stacks(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/stacks', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_stacks(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/stacks', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_stacks_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/stacks/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_stacks_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/stacks/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_certificates(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/certificates', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_certificates(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/certificates', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_certificates_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/certificates/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_pricing_objectstorage(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/pricing/objectstorage', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_objectstorage_dcslug_bucket(client: ApiClient, dcslug: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/objectstorage/${dcslug}/bucket`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_objectstorage_dcslug_bucket_name(client: ApiClient, dcslug: string, name: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/objectstorage/${dcslug}/bucket/${name}/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_objectstorage_bucket_create(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/objectstorage/bucket/create/', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_objectstorage_dcslug_bucket_name_delete(client: ApiClient, dcslug: string, name: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/objectstorage/${dcslug}/bucket/${name}/delete/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_objectstorage_dcslug_bucket_bucket_name_policy_policy_type(client: ApiClient, dcslug: string, bucket_name: string, policy_type: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/objectstorage/${dcslug}/bucket/${bucket_name}/policy/${policy_type}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_objectstorage_dcslug_bucket_name_permission_selected_permission_accesskey_selected_key(client: ApiClient, dcslug: string, name: string, selected_permission: string, selected_key: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/objectstorage/${dcslug}/bucket/${name}/permission/${selected_permission}/accesskey/${selected_key}/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_objectstorage_innoida_bucket_bucket_name_objects(client: ApiClient, bucket_name: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/objectstorage/innoida/bucket/${bucket_name}/objects`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_objectstorage_dcslug_bucket_name_createdirectory(client: ApiClient, dcslug: string, name: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/objectstorage/${dcslug}/bucket/${name}/createdirectory/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_objectstorage_dcslug_bucket_name_delete_object(client: ApiClient, dcslug: string, name: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/objectstorage/${dcslug}/bucket/${name}/delete/object`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_objectstorage_dcslug_bucket_name_download(client: ApiClient, dcslug: string, name: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/objectstorage/${dcslug}/bucket/${name}/download`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_objectstorage_innoida_bucket_uthostorage_upload_internal(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/objectstorage/innoida/bucket/uthostorage/upload/internal', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_objectstorage_dcslug_accesskeys(client: ApiClient, dcslug: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: `/objectstorage/${dcslug}/accesskeys/`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_objectstorage_dcslug_accesskey_create(client: ApiClient, dcslug: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/objectstorage/${dcslug}/accesskey/create`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_objectstorage_dcslug_accesskey_name_status(client: ApiClient, dcslug: string, name: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/objectstorage/${dcslug}/accesskey/${name}/status`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_ebs(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/ebs', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_ebs(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/ebs', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_ebs_id_resize(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/ebs/${id}/resize`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_ebs_storage_id_destroy(client: ApiClient, storage_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/ebs/${storage_id}/destroy`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_ebs_storage_id_attach(client: ApiClient, storage_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/ebs/${storage_id}/attach`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_ebs_storage_id_dettach(client: ApiClient, storage_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/ebs/${storage_id}/dettach`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_registry_projects(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/registry/projects', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_registry(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/registry', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_registry(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/registry', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_registry_project_registry_name(client: ApiClient, registry_name: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/registry/project/${registry_name}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_alert_contact_list(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/alert/contact/list', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_alert_contact_add(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/alert/contact/add', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_alert_contact_id_update(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/alert/contact/${id}/update`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_alert_contact_id_delete(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/alert/contact/${id}/delete`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_alert(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/alert', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_alert(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/alert', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_alert_alert_id_delete(client: ApiClient, alert_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/alert/${alert_id}/delete`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_targetgroup(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/targetgroup', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_targetgroup(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/targetgroup', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_targetgroup_target_group_id(client: ApiClient, target_group_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: `/targetgroup/${target_group_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_targetgroup_id(client: ApiClient, id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/targetgroup/${id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_targetgroup_target_group_id_target(client: ApiClient, target_group_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: `/targetgroup/${target_group_id}/target`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_targetgroup_target_group_id_target_target_id(client: ApiClient, target_group_id: string, target_id: string, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: `/targetgroup/${target_group_id}/target/${target_id}`, query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_ipsec(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/ipsec', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_ipsec(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/ipsec', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_ipsec(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: '/ipsec', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function put_ipsec(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'PUT', path: '/ipsec', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function get_waf_list(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'GET', path: '/waf/list', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_waf_create(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/waf/create', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_waf_attach_rule(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/waf/attach_rule', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_waf_detach_rule(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/waf/detach_rule', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_waf_create_ruleset(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/waf/create_ruleset', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_waf_add_rule(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/waf/add_rule', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function post_waf_create_waf_instance(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'POST', path: '/waf/create_waf_instance', query: options?.query, body: options?.body, headers: options?.headers });
}
export async function delete_waf_delete(client: ApiClient, options?: { query?: any; body?: any; headers?: Record<string,string> }) {
  return client.request({ method: 'DELETE', path: '/waf/delete', query: options?.query, body: options?.body, headers: options?.headers });
}
