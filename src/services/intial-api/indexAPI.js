import userService from "@/services/userService";
import instance from "@/services/intial-api/instance";
import listenerService from "@/services/listenerService";
import optionsService from "@/services/optionsService";
import metricsService from "@/services/metricsService";


export default {
    users: userService(instance),
    listeners: listenerService(instance),
    options: optionsService(instance),
    metric: metricsService(instance)
}