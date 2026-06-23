"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    register( /* { strapi }: { strapi: Core.Strapi } */) { },
    async bootstrap({ strapi }) {
        const publicRole = await strapi.db
            .query('plugin::users-permissions.role')
            .findOne({ where: { type: 'public' } });
        if (!publicRole)
            return;
        const existing = await strapi.db
            .query('plugin::users-permissions.permission')
            .findOne({
            where: {
                role: publicRole.id,
                action: 'api::contact.contact.create',
            },
        });
        if (!existing) {
            await strapi.db.query('plugin::users-permissions.permission').create({
                data: {
                    action: 'api::contact.contact.create',
                    role: publicRole.id,
                },
            });
        }
    },
};
